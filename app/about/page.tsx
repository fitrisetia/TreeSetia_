// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-textDark mb-12">
        Tentang <span className="text-accent">Saya</span> {/* Aksen warna accent */}
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl mb-6 border-4 border-accent"> {/* Border warna accent */}
            <Image
              src="/profile.jpg"
              alt="TreeSetia - About Me"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-3xl font-bold text-textDark mb-2">Fitri Setiawati</h2> {/* Teks gelap */}
          <p className="text-lg text-textMedium text-center mb-4"> {/* Teks sekunder */}
            Creator Konten Visual & Penulis
          </p>
          <ul className="text-textMedium space-y-2 text-center md:text-left"> {/* Teks sekunder */}
            <li><strong className="font-semibold">Email:</strong> fitrisetia2003@gmail.com</li>
            <li><strong className="font-semibold">Lokasi:</strong> Bandung, Indonesia</li>
            <li><strong className="font-semibold">Hobi:</strong> Fotografi, Musik, Hiking</li>
          </ul>
        </div>

        <div className="w-full md:w-2/3 text-lg text-textMedium leading-relaxed space-y-6"> {/* Teks sekunder */}
          <p>
            Halo! Saya Fitri Setiawati, seorang individu yang bersemangat dalam menjelajahi dan mendokumentasikan dunia melalui berbagai lensa. Berbasis di **Bandung, Indonesia**, saya menghabiskan waktu saya untuk mengabadikan momen, menyelami melodi, dan merangkai kata.
          </p>
          <p>
            Minat saya pada fotografi berawal dari keinginan untuk menangkap keindahan detail dalam setiap cerita yang ingin diceritakan. Dari lanskap pegunungan yang megah hingga potret manusia yang penuh ekspresi. Saya percaya setiap gambar memiliki narasi yang kuat. Di galeri saya, Anda akan menemukan beragam karya yang merefleeksikan perjalanan visual saya.
          </p>
          <p>
            Selain itu, musik adalah bagian tak terpisahkan dari hidup saya. Dari genre indie, pop-folk hingga instrumental, musik adalah soundtrack yang menemani setiap petualangan dan momen refleksi saya. Saya senang berbagi melodi yang menginspirasi, dan Anda bisa mendengarkan beberapa di antaranya di halaman Music.
          </p>
          <p>
            Sebagai seorang penulis, saya senang menuangkan pemikiran, observasi, dan pengalaman melalui tulisan. Blog saya adalah tempat di mana saya berbagi catatan perjalanan, tutorial, ulasan, atau sekadar refleksi pribadi tentang hal-hal yang saya pelajari dan temui.
          </p>
          <p>
            Terima kasih telah mengunjungi portofolio saya. Saya berharap Anda menikmati perjalanan melalui dunia kreatif saya dan menemukan sesuatu yang menginspirasi!
          </p>
        </div>
      </div>
    </div>
  );
}