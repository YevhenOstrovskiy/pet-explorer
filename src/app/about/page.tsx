export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">About this Product</h1>
      <div className="max-w-2xl text-center text-gray-700 leading-relaxed">
        <p className="mb-4">
          <span className="font-semibold">PetBreedExplorer</span> is a web application built with 
          <span className="text-blue-500"> Next.js</span> and styled using 
          <span className="text-green-500"> Tailwind CSS</span>. It provides users with detailed information 
          about various cat and dog breeds.
        </p>
        <p className="mb-4">
          The application features a clean and responsive interface that allows users to explore different breeds,
          view specific details, and compare characteristics.
        </p>
        <p>
          Leveraging the power of <span className="text-blue-500">Next.js</span>, PetBreedExplorer ensures fast 
          loading times and seamless navigation between pages, while 
          <span className="text-green-500"> Tailwind CSS</span> ensures a modern and aesthetically pleasing 
          design across all devices.
        </p>
      </div>
    </div>
  );
};
