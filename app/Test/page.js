"use client";
import { useAuth } from "@clerk/nextjs";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { getIdeas } from "@/supabase/supabaseRequests";
import { supabaseReadAuth } from "@/supabase/supabaseClient";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);

export default function Shipping() {
  const { getToken, userId } = useAuth();
  const [BizIdeas, setBizIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idea, setIdea] = useState("");
  const [details, setDetails] = useState("");

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  // You can either import the READ and INSERT function for supabase
  // I am using them right here to ensure the control over the loading spinner.
  useEffect(() => {
    const loadIdeas = async () => {
      try {
        setIsLoading(true); // Set loading to true when starting the operation
        const token = await getToken({ template: "supabaseIndieHackerKit" });
        const supabase = await supabaseReadAuth(token);
        const { data: ideas } = await supabase
          .from("Ideas")
          .select("*")
          .eq("user_id", userId);
        setBizIdeas(ideas);
      } catch (error) {
        console.error("Error loading ideas:", error);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or failure
      }
    };
    loadIdeas();
  }, [userId, getToken]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true); // Set loading to true when starting the operation
      const token = await getToken({ template: "supabaseIndieHackerKit" });
      const supabase = await supabaseReadAuth(token);
      const { data, error } = await supabase.from("Ideas").insert({
        user_id: userId,
        idea: event.target[0].value,
        details: event.target[1].value,
      });
      if (error) {
        console.log(error);
        return;
      }
      const ideas = await getIdeas({ userId, token });
      setIdea("");
      setDetails("");
      setBizIdeas(ideas);
    } catch (error) {
      console.error("Error adding idea:", error);
    } finally {
      setIsLoading(false); // Set loading to false regardless of success or failure
    }
  };

  return (
    <div className="relative isolate overflow-hidden h-screen bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Left side with accordion */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Business Ideas
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {isLoading ? (
            <LoadingSpinner />
          ) : Array.isArray(BizIdeas) && BizIdeas.length > 0 ? (
            <AccordionList className="max-w-md mx-auto">
              {BizIdeas.map((idean) => (
                <Accordion key={idean.id}>
                  <AccordionHeader>{idean.idea} </AccordionHeader>
                  <AccordionBody>{idean.details}</AccordionBody>
                </Accordion>
              ))}
            </AccordionList>
          ) : (
            <p>Ideas are loading...</p>
          )}
        </div>

        {/* Right side with the form */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 mt-12">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              <form className="max-w-sm mt-12" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="idea"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Your Idea
                  </label>
                  <input
                    type="text"
                    id="idea"
                    value={idea}
                    onChange={handleIdeaChange}
                    required
                    className="bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="details"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Details
                  </label>
                  <input
                    required
                    type="text"
                    id="details"
                    value={details}
                    onChange={handleDetailsChange}
                    className="bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
