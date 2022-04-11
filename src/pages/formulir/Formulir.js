import axios from 'axios';
import React, { useState } from 'react';

const Formulir = () => {
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  let [dataPengajuan, setDataPengajuan] = useState([]);

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

    let {
      nama,
      umur,
      jenis_kelamin,
      alamat,
      penghasilan_sebelum_pandemi,
      penghasilan_setelah_pandemi,
      alasan_membutuhkan_bantuan,
      rt,
      rw,
      foto_ktp,
      foto_kartu_keluarga,
      nik,
      nomor_kartu_keluarga,
    } = input;

    if (currentId === -1) {
      axios
        .post(`http://localhost:1337/pengajuans`, {
          nama,
          umur,
          jenis_kelamin,
          alamat,
          penghasilan_sebelum_pandemi,
          penghasilan_setelah_pandemi,
          alasan_membutuhkan_bantuan,
          rt,
          rw,
          foto_ktp,
          foto_kartu_keluarga,
          nik,
          nomor_kartu_keluarga,
        })
        .then((res) => {
          setFetchStatus(true);
        })
        .catch((err) => {});
    } else {
      axios
        .put(`http://localhost:1337/pengajuans/${currentId}`, {
          nama: input.nama,
          umur: input.umur,
          jenis_kelamin: input.jenis_kelamin,
          alamat: input.alamat,
          penghasilan_sebelum_pandemi: input.penghasilan_sebelum_pandemi,
          penghasilan_setelah_pandemi: input.penghasilan_setelah_pandemi,
          alasan_membutuhkan_bantuan: input.alasan_membutuhkan_bantuan,
          rt: input.rt,
          rw: input.rw,
          foto_ktp: input.foto_ktp,
          foto_kartu_keluarga: input.foto_kartu_keluarga,
          nik: input.nik,
          nomor_kartu_keluarga: input.nomor_kartu_keluarga,
        })
        .then((res) => {
          setFetchStatus(true);
          let data = dataPengajuan.find((el) => el.id === currentId);
          nama = data.nama;
          umur = data.umur;
          jenis_kelamin = data.jenis_kelamin;
          alamat = data.alamat;
          penghasilan_sebelum_pandemi = data.penghasilan_sebelum_pandemi;
          penghasilan_setelah_pandemi = data.penghasilan_setelah_pandemi;
          alasan_membutuhkan_bantuan = data.alasan_membutuhkan_bantuan;
          rt = data.rt;
          rw = data.rw;
          foto_ktp = data.foto_ktp;
          foto_kartu_keluarga = data.foto_kartu_keluarga;
          nik = data.nik;
          nomor_kartu_keluarga = data.nomor_kartu_keluarga;
          setDataPengajuan([...dataPengajuan]);
        });
    }

    setInput({
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

    setCurrentId(-1);
  };

  return (
    <>
      <div className="container flex w-full m-auto">
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
              <div className="grid w-full space-y-6 gap-y-6">
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
                  <div className="mt-2 ml-4 text-xs font-semibold text-gray-700">
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
                  <div className="relative flex items-center justify-center px-4 text-gray-400 border border-gray-300 rounded-lg gap-x-5">
                    Foto KTP
                    <input
                      required
                      value={input.foto_ktp}
                      onChange={handleChange}
                      name="foto_ktp"
                      type="file"
                      className="flex-1 w-full px-4 py-6 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none ml-96 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Foto KTP"
                    />
                  </div>
                  <div className="mt-2 ml-4 text-xs font-semibold text-gray-700">
                    Maksimal 2MB, format JPG/JPEG/PNG/BMP
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex items-center justify-center px-4 text-gray-400 border border-gray-300 rounded-lg gap-x-6">
                    Foto Kartu Keluarga
                    <input
                      required
                      value={input.foto_kartu_keluarga}
                      onChange={handleChange}
                      name="foto_kartu_keluarga"
                      type="file"
                      className="flex-1 w-full px-4 py-6 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none ml-72 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Foto Kartu Keluarga"
                    />
                  </div>
                  <div className="mt-2 ml-4 text-xs font-semibold text-gray-700">
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
                  <div className="mt-2 ml-4 text-xs font-semibold text-gray-700">
                    Maksimal 2MB, format JPG/JPEG/PNG/BMP
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex items-center justify-center ">
                    <label className="ml-4 text-gray-400 ">
                      Pilih Jenis Kelamin
                    </label>
                    <select
                      required
                      value={input.jenis_kelamin}
                      onChange={handleChange}
                      name="jenis_kelamin"
                      className="flex-1 w-full px-4 py-2 ml-20 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option>laki_laki</option>
                      <option>perempuan</option>
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
                  <div className="relative flex items-center justify-center ">
                    <label className="ml-4 text-gray-400 ">
                      Alasan Membutuhkan Bantuan
                    </label>
                    <select
                      required
                      value={input.alasan_membutuhkan_bantuan}
                      onChange={handleChange}
                      name="alasan_membutuhkan_bantuan"
                      className="flex-1 w-full px-4 py-2 ml-20 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option>kehilangan_pekerjaan</option>
                      <option>
                        kepala_keluarga_terdampak_atau_korban_covid
                      </option>
                      <option>
                        tergolong_fakir_miskin_semenjak_sebelum_covid
                      </option>
                      <option>lainnya</option>
                    </select>
                  </div>
                  <div className="relative w-1/2 mt-6 ml-80 left-6">
                    <div className="relative">
                      <textarea
                        rows={5}
                        value={input.alasan_membutuhkan_bantuan}
                        onChange={handleChange}
                        name="penghasilan_setelah_pandemi"
                        type="text"
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Isi jika lainnya ..."
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center ml-4 text-sm font-semibold gap-x-5">
                  <input
                    required
                    name="read_me"
                    type="checkbox"
                    className="w-6 h-6"
                  />
                  Saya menyatakan bahwa data yang diisikan adalah benar dan siap
                  mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam
                  data tersebut.
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
      </div>
    </>
  );
};

export default Formulir;
