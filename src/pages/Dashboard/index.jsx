import React from "react";
import { Footer } from "../../layout";

const dataCard = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Earnings",
    price: "$350.4",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Spend this month",
    price: "$642.39",
  },
  {
    id: 3,
    title: "Sales",
    price: "$574.34",
    percent: " since last month",
  },
  {
    id: 4,

    title: "Your balance",
    price: "$1.000",
    avatar:
      "https://www.clipartmax.com/png/middle/214-2141656_girl-people-woman-avatar-person-human-icon-people-icon-girl.png",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "New Tasks",
    price: "154",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Total Projects",
    price: "2935",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-x-4 gap-y-6 overflow-hidden">
        {dataCard?.map((data) => (
          <div
            key={data.id}
            className="bg-[#111c44] drop-shadow-sm shadow-lg rounded-2xl"
          >
            <div
              className={`h-auto flex p-4 items-start justify-start  gap-4 ${
                data.avatar && "flex flex-row-reverse  justify-between"
              }`}
            >
              {data.icon && (
                <div className="bg-black/10  filter p-4 rounded-full">
                  <p>{data.icon}</p>
                </div>
              )}
              {data.avatar && (
                <img
                  src={data.avatar}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full bg-transparent"
                />
              )}
              <div className="">
                <h1 className="text-gray-400 text-sm">{data.title}</h1>
                <h1 className="font-semibold text-2xl">{data.price}</h1>
                {data.percent && (
                  <p className="text-xs text-gray-400 font-light">
                    <span className="text-xs text-green-500">+23%</span>{" "}
                    {data.percent}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg lg:col-span-3 ">
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg lg:col-span-3 ">
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg md:col-span-2 lg:col-span-3 2xl:col-span-6">
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg lg:col-span-3">
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg lg:col-span-3">
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg  md:col-span-2 lg:col-span-3 2xl:col-span-6">
          {" "}
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg lg:col-span-3">
          {" "}
          <div className="h-80"></div>
        </div>
        <div className=" bg-[#111c44] drop-shadow-sm shadow-lg rounded-lg lg:col-span-3">
          {" "}
          <div className="h-80"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
