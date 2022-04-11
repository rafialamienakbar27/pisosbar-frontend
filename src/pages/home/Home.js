import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <div className="relative items-center justify-center w-11/12 m-auto mt-12 overflow-hidden bg-white dark:bg-gray-800 lg:flex lg:items-center">
          <div className="z-20 w-full px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Solusi untuk kita semua</span>
            </h2>
            <p className="mt-4 text-gray-400 text-md">
              Aplikasi yang dapat menginput data warga yang membutuhkan bantuan
              di era pandemi ini, khususnya area di wilayah Kelurahan Cipadung
              Kulon, Kecamatan Panyileukan
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex mt-12 rounded-md shadow">
                <Link
                  to={'/formulir'}
                  type="button"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 p-8 lg:p-24">
            <img
              src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?k=20&m=857146092&s=612x612&w=0&h=RJ0UMmONL-_MzItfAdQildbz08FZzOIYfmzTmfPYdao="
              className="w-1/2 rounded-lg"
              alt="Tree"
            />
            <div>
              <img
                src="https://media.istockphoto.com/photos/friends-linking-arms-in-unity-picture-id1199706305?k=20&m=1199706305&s=612x612&w=0&h=uJShYZ2DBU6M_F1_oztFeocH0GVq2g94p6cak_I3z_M="
                className="mb-8 rounded-lg"
                alt="Tree"
              />
              <img
                src="https://media.istockphoto.com/photos/teamwork-high-five-as-team-together-hands-air-greeting-power-tag-team-picture-id1198049185?k=20&m=1198049185&s=612x612&w=0&h=7k8bwcjZ5WcT_tY0y-H0-DIEs3fCZErRW2EthQVRsFk="
                className="rounded-lg"
                alt="Tree"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
