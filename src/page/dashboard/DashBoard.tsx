import React from "react";
import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
import ChartsOverviewDemo from "../../component/chart/BarChartComponent";
import RoundChart from "../../component/chart/RoundChart";

interface TopStatProps {
  title: string;
  subtitle: string;
  value: string;
  bgColor: string;
}

const TopStat: React.FC<TopStatProps> = ({
  title,
  subtitle,
  value,
  bgColor,
}) => (
  <div className={`p-4 rounded-lg ${bgColor}`}>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{subtitle}</p>
    <p className="text-xs mt-2 text-gray-500">{value}</p>
  </div>
);

interface NotificationProps {
  name: string;
  action: string;
  time: string;
  avatar: string;
}

const Notification: React.FC<NotificationProps> = ({
  name,
  action,
  time,
  avatar,
}) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
    <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
    <div>
      <p className="text-sm text-white">
        <span className="font-semibold">{name}</span> {action}
      </p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex bg-[#13172b] min-h-screen text-white ]">
      {/* Sidebar */}
      <div className="mt-[100px]">
        <Menu></Menu>
      </div>

      {/* Main content */}
      <div className="w-full mt-[100px] ml-[20px]">
        {" "}
        {/* Thêm pt-24 để đẩy nội dung xuống */}
        <Header></Header>
        {/* Dashboard content */}
        <div className="grid grid-cols-3 gap-6 pr-5">
          {/* Teams Strength */}

          <div className="col-span-2 bg-[#1a1f37] rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Daily Chart</h2>
            
            <div >
              <ChartsOverviewDemo></ChartsOverviewDemo>
            </div>
            
          </div>

          {/* Employees */}
          <div className="bg-[#1a1f37] rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Weekly Task</h2>
            <RoundChart></RoundChart>
            {/* <div className="flex justify-center items-center h-40">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-4 border-purple-500 rounded-full"></div>
                <div className="absolute inset-2 border-4 border-blue-500 rounded-full"></div>
                <div className="absolute inset-4 border-4 border-green-500 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Employee"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <div>
                <p className="text-purple-500">254</p>
                <p className="text-gray-400">Active</p>
              </div>
              <div>
                <p className="text-blue-500">3000</p>
                <p className="text-gray-400">Inactive</p>
              </div>
              <div>
                <p className="text-green-500">3254</p>
                <p className="text-gray-400">Total</p>
              </div>
            </div> */}
          </div>

          {/* Project Deliveries */}
          <div className="col-span-2 bg-[#1a1f37] rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Project Deliveries</h2>
            <div className="h-40 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-50 rounded"></div>
            <div className="flex justify-between mt-4 text-xs text-gray-400">
              <span>Oct 2021</span>
              <span>Nov 2021</span>
              <span>Dec 2021</span>
              <span>Jan 2022</span>
              <span>Feb 2022</span>
              <span>Mar 2022</span>
            </div>
          </div>

          {/* Top 10 and Notifications */}
          <div className="space-y-6">
            <TopStat
              title="Top 10"
              subtitle="Position in Dribble"
              value="24% increase from last week"
              bgColor="bg-orange-100"
            />
            <TopStat
              title="26"
              subtitle="New Employees Onboarded"
              value="15% increase from last month"
              bgColor="bg-blue-100"
            />
            <TopStat
              title="500"
              subtitle="New Clients Approached"
              value="5% increase from last week"
              bgColor="bg-blue-100"
            />
            <div className="bg-[#1a1f37] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <a href="#" className="text-purple-500 text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-2">
                <Notification
                  name="Ellie"
                  action="joined team developers"
                  time="2 mins ago"
                  avatar="/placeholder.svg?height=40&width=40"
                />
                <Notification
                  name="Jenny"
                  action="joined team HR"
                  time="1 hour ago"
                  avatar="/placeholder.svg?height=40&width=40"
                />
                <Notification
                  name="Adam"
                  action="got employee of the month"
                  time="2 hours ago"
                  avatar="/placeholder.svg?height=40&width=40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
