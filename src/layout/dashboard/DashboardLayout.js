import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = (props) => {
  return (
    <>
      <main className="bg-white dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <div className="h-screen hidden lg:block shadow-lg relative w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <Header />
            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
