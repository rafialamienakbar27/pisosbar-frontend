import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DataPengajuan = () => {
  const [dataPengajuan, setDataPengajuan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchStatus, setFecthStatus] = useState(true);

  const [input, setInput] = useState({
    nama: '',
    nik: '',
    nomor_kartu_keluarga: '',
    foto_ktp: '',
    foto_kartu_keluarga: '',
    umur: '',
    jenis_kelamin: '',
    alamat: '',
    rt: '',
    rw: '',
    penghasilan_sebelum_pandemi: '',
    penghasilan_setelah_pandemi: '',
    alasan_membutuhkan_bantuan: '',
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(input);
  };

  useEffect(() => {
    let fetchData = async () => {
      try {
        setLoading(true);
        let { data } = await axios.get(`http://localhost:1337/pengajuans`);
        setLoading(false);

        let result = data;

        setDataPengajuan([...result]);
      } catch (error) {
        setTimeout(() => {
          alert('Server error akibat server load yang terlalu tinggi');
        }, 1500);
      }
    };

    if (fetchStatus) {
      fetchData();
      setFecthStatus(false);
    }
  }, [fetchStatus, setFecthStatus]);

  return (
    <>
      <div className="flex-wrap items-start justify-center w-full m-auto container-pengajuan">
        {dataPengajuan.map((res) => {
          return (
            <>
              <form
                key={res.id}
                onSubmit={handleSubmit}
                className="w-1/2 mt-10 m-auto bg-white border rounded-lg shadow-2xl"
              >
                <div className="px-4 py-8 sm:px-10">
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                      <span className="px-2 text-xl font-semibold text-gray-400 bg-white">
                        Data Pengajuan
                      </span>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div className="grid w-full space-y-6">
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Nama</div>
                          <div>:</div>
                          <div
                            key={res.id}
                            className="flex-1 w-full px-4 py-2 text-base text-gray-700 "
                          >
                            {res.nama}
                          </div>
                        </div>
                      </div>
                      <div key={res.id} className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">NIK</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.nik}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Nomor Kartu Keluarga</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.nik}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Foto KTP</div>
                          <div>:</div>
                          <img
                            src={res.foto_ktp.url}
                            className="flex-1 w-full px-4 py-2 text-base text-gray-700 "
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Foto Kartu Keluarga</div>
                          <div>:</div>
                          <img
                            src={res.foto_kartu_keluarga.url}
                            className="flex-1 w-full px-4 py-2 text-base text-gray-700 "
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Umur</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.umur}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Jenis Kelamin</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.jenis_kelamin}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">Alamat</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.alamat}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">RT</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.rt}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">RW</div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.rw}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">
                            Penghasilan Sebelum Pandemi
                          </div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.penghasilan_sebelum_pandemi}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">
                            Penghasilan Setelah Pandemi
                          </div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.penghasilan_sebelum_pandemi}
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex items-center">
                          <div className="w-1/2 ">
                            Alasan Membutuhkan Bantuan
                          </div>
                          <div>:</div>
                          <div className="flex-1 w-full px-4 py-2 text-base text-gray-700 ">
                            {res.alasan_membutuhkan_bantuan}
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="block w-full mb-10 rounded-md shadow-sm">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                          >
                            Kirim
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DataPengajuan;
