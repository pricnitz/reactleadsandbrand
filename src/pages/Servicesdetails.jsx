import { useParams } from "react-router-dom";

function ServicesDetails({ data }) {
  const { link } = useParams();
  const service = data.find(item => item.link === `/${link}`);

  // If no service is found, return a message to prevent a crash
  if (!service) {
    return <div className="text-center text-white py-20">Service not found</div>;
  }

  // Convert description to array if it's just a string
  const sections = Array.isArray(service.description) ? service.description : [service.description];

  return (
    <div className="bg-black py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mt-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
          {service.title}
        </h1>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((text, index) => (
            <div
              key={index}
              className=" shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;