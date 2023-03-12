


export default function WhereWeAre() {
  const addresses = [
    { location: "New York", address: "123 Main St." },
    { location: "Los Angeles", address: "456 Maple Ave." },
    { location: "Chicago", address: "789 Oak St." },
  ];

  return (
    <div className="bg-[#FFF9E2] p-6 rounded-lg flex items-center justify-evenly w-full  ">
      <div className=" font-bold  sm:text-3xl mb-4">Where We've worked</div>
      <div>
        {addresses.map((address, index) => (
          <div key={index} className=" flex  mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <div>
              <div className="font-bold">{address.location}</div>
              <div>{address.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
