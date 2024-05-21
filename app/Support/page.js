import Link from "next/link";

const PrivacyContent = [
  {
    heading: "1. Information Collection",
    description:
      "Indie Hacker Kit may collect personal information when necessary to provide you with our services. We will inform you of the purposes for which your information is collected and how it will be used.",
  },
  {
    heading: "2. Account Sign-Up",
    description:
      "You may sign up for Indie Hacker Kit using your Google account. When you do so, your account username will be prefilled with your name and your public profile picture.",
  },
  {
    heading: "3. Data Retention and Protection",
    description:
      "We will retain collected information only for as long as necessary to provide you with our services. We take reasonable measures to protect your data from loss, theft, unauthorized access, disclosure, copying, use, or modification.",
  },
  {
    heading: "4. Third-Party Links",
    description:
      "Our website may contain links to external sites not operated by us. We are not responsible for the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.",
  },
  {
    heading: "5. Refusal of Information",
    description:
      "You are free to refuse to provide personal information, with the understanding that we may be unable to provide certain services as a result.",
  },
];

export default function Support() {
  return (
    <div className="px-6 py-24 lg:py-32 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold text-gray-300 sm:text-4xl">
            Contact Us for Support
          </h1>
          <div className="mt-8 text-gray-300">
            <p className="mt-12">
              <strong>
                Thank you for visiting our support page. We're here to help!
              </strong>
              <br />
              Thank you for visiting our support page. We're here to help! If
              you have any questions, concerns, or need assistance with any of
              our services, please don't hesitate to reach out to us. Our
              dedicated support team is ready to assist you with:
              Troubleshooting issues Providing guidance on our products and
              services Answering any general inquiries You can contact us via
              email at: <p className="text-blue-500">
                manageanirudh@gmail.com
              </p>{" "}
              We strive to respond to all queries within 24 hours. Your
              satisfaction is our top priority, and we are committed to
              providing you with the best possible support. Thank you for
              choosing us!
            </p>
          </div>
        </div>
        <div className="md:col-span-1">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Screenshot"
            className="w-full max-w-lg mx-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 text-gray-300">
        <p className="text-center">
          For more information, please review our{" "}
          <Link href="/PrivacyPolicy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}