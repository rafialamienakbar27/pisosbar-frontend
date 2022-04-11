import React, { useState } from 'react';

const Dashboard = () => {
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

  return (
    <>
      <div className="container-dashboard flex w-full m-auto">
        <form
          onSubmit={handleSubmit}
          className="w-3/4 m-auto bg-white border rounded-lg shadow-2xl"
        >
          <div className="px-4 py-8 sm:px-10">
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-xl font-semibold text-gray-400 bg-white">
                  Formulir Input Data
                </span>
              </div>
            </div>
            <div className="mt-14">
              <div className="w-full space-y-6 gap-y-6 grid">
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.nama}
                      onChange={handleChange}
                      name="nama"
                      type="text"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Nama"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.nik}
                      onChange={handleChange}
                      name="nik"
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="NIK"
                    />
                  </div>
                  <div className="ml-4 mt-2 text-xs text-gray-700 font-semibold">
                    Format Standar NIK
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.nomor_kartu_keluarga}
                      onChange={handleChange}
                      name="nomor_kartu_keluarga"
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Nomor Kartu Keluarga"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 text-gray-400 rounded-lg px-4 flex items-center justify-center gap-x-5">
                    Foto KTP
                    <input
                      required
                      value={input.foto_ktp}
                      onChange={handleChange}
                      name="foto_ktp"
                      type="file"
                      className="flex-1 w-full px-4 py-6 text-base text-gray-700 placeholder-gray-400 bg-white rounded-lg shadow-sm appearance-none ml-96 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Foto KTP"
                    />
                  </div>
                  <div className="ml-4 mt-2 text-xs text-gray-700 font-semibold">
                    Maksimal 2MB, format JPG/JPEG/PNG/BMP
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex border border-gray-300 text-gray-400 items-center justify-center rounded-lg px-4 gap-x-6">
                    Foto Kartu Keluarga
                    <input
                      required
                      value={input.foto_kartu_keluarga}
                      onChange={handleChange}
                      name="foto_kartu_keluarga"
                      type="file"
                      className="flex-1 w-full px-4 py-6 text-base text-gray-700 placeholder-gray-400 bg-white rounded-lg shadow-sm appearance-none ml-72 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Foto Kartu Keluarga"
                    />
                  </div>
                  <div className="ml-4 mt-2 text-xs text-gray-700 font-semibold">
                    Maksimal 2MB, format JPG/JPEG/PNG/BMP
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.umur}
                      onChange={handleChange}
                      name="umur"
                      min={25}
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Umur"
                    />
                  </div>
                  <div className="ml-4 mt-2 text-xs text-gray-700 font-semibold">
                    Maksimal 2MB, format JPG/JPEG/PNG/BMP
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center items-center ">
                    <label className="ml-4 text-gray-400 ">
                      Pilih Jenis Kelamin
                    </label>
                    <select
                      required
                      value={input.jenis_kelamin}
                      onChange={handleChange}
                      name="jenis_kelamin"
                      className="flex-1 w-full ml-20 px-4 py-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="laki-laki">Laki-laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative rounded-lg">
                    <textarea
                      rows="5"
                      required
                      value={input.alamat}
                      onChange={handleChange}
                      name="alamat"
                      maxLength={255}
                      type="text"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Alamat"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.rt}
                      onChange={handleChange}
                      name="rt"
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="RT"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.rw}
                      onChange={handleChange}
                      name="rw"
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="RW"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.penghasilan_sebelum_pandemi}
                      onChange={handleChange}
                      name="penghasilan_sebelum_pandemi"
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Penghasilan Sebelum Pandemi"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-gray-300 rounded-lg">
                    <input
                      required
                      value={input.penghasilan_setelah_pandemi}
                      onChange={handleChange}
                      name="penghasilan_setelah_pandemi"
                      type="number"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Penghasilan Setelah Pandemi"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center items-center ">
                    <label className="ml-4 text-gray-400 ">
                      Alasan Membutuhkan Bantuan
                    </label>
                    <select
                      required
                      value={input.jenis_kelamin}
                      onChange={handleChange}
                      name="jenis_kelamin"
                      className="flex-1 w-full ml-20 px-4 py-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="laki-laki">Kehilangan pekerjaan</option>
                      <option value="perempuan">
                        Kepala keluarga terdampak atau korban covid
                      </option>
                      <option>
                        Tergolong fakir/miskin semenjak sebelum covid
                      </option>
                      <option>Lainnya ... </option>
                    </select>
                  </div>
                  <div className="w-6/12 ml-80 relative left-6 mt-6">
                    <div className="relative">
                      <textarea
                        rows={5}
                        required
                        value={input.penghasilan_setelah_pandemi}
                        onChange={handleChange}
                        name="penghasilan_setelah_pandemi"
                        type="text"
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Isi jika lainnya ..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
