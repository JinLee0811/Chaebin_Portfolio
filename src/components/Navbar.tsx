import Link from "next/link";

const socialIcons = [
  {
    id: 1, // 유튜브
    d: "M21.582,6.186c-0.23,-0.86 -0.908,-1.538 -1.768,-1.768c-1.56,-0.418 -7.814,-0.418 -7.814,-0.418c0,0 -6.254,0 -7.814,0.418c-0.86,0.23 -1.538,0.908 -1.768,1.768c-0.418,1.56 -0.418,5.814 -0.418,5.814c0,0 0,4.254 0.418,5.814c0.23,0.86 0.908,1.538 1.768,1.768c1.56,0.418 7.814,0.418 7.814,0.418c0,0 6.254,0 7.814,-0.418c0.861,-0.23 1.538,-0.908 1.768,-1.768c0.418,-1.56 0.418,-5.814 0.418,-5.814c0,0 0,-4.254 -0.418,-5.814zM10,15.464v-6.928l6,3.464z",
    viewBox: "0 0 24 24",
    link: "https://www.youtube.com/",
  },
  {
    id: 2, // 인스타그램
    d: "M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z",
    viewBox: "0 0 24 24",
    link: "https://www.instagram.com/",
  },
  {
    id: 3, // 틱톡
    d: "M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z",
    viewBox: "0 0 24 24",
    link: "https://www.tiktok.com/",
  },
  {
    id: 4, // 유튜브 뮤직
    d: "M17,3h-10c-2.2,0 -4,1.8 -4,4v10c0,2.2 1.8,4 4,4h10c2.2,0 4,-1.8 4,-4v-10c0,-2.2 -1.8,-4 -4,-4zM17,15h-0.01c0.01,0.04 0.01,0.08 0.01,0.12c0,1.04 -1.12,1.88 -2.5,1.88c-1.38,0 -2.5,-0.96 -2.5,-2c0,-1.03 1,-2 2,-2c0.17,0 1,0 1,0v-3.5l-4,1v5.5h-0.01c0.01,0.04 0.01,0.08 0.01,0.12c0,1.04 -1.12,1.88 -2.5,1.88c-1.38,0 -2.5,-0.96 -2.5,-2c0,-1.03 1,-2 2,-2c0.17,0 1,0 1,0c0,-1 0,-5.22 0,-5.22c0,-0.46 0.31,-0.86 0.76,-0.97l6,-1.5c0.63,-0.16 1.24,0.32 1.24,0.97z",
    viewBox: "0 0 24 24",
    link: "https://www.tiktok.com/",
  },
  {
    id: 5, // 스포티파이
    d: "M15,3c-6.6,0 -12,5.4 -12,12c0,6.6 5.4,12 12,12c6.6,0 12,-5.4 12,-12c0,-6.6 -5.4,-12 -12,-12zM19.731,21c-0.22,0 -0.33,-0.11 -0.55,-0.22c-1.65,-0.991 -3.74,-1.54 -5.94,-1.54c-1.21,0 -2.53,0.22 -3.63,0.44c-0.22,0 -0.44,0.11 -0.55,0.11c-0.44,0 -0.77,-0.33 -0.77,-0.77c0,-0.44 0.22,-0.77 0.66,-0.77c1.43,-0.33 2.861,-0.55 4.401,-0.55c2.53,0 4.84,0.66 6.82,1.76c0.22,0.22 0.44,0.33 0.44,0.77c-0.222,0.55 -0.552,0.77 -0.881,0.77zM20.94,17.921c-0.22,0 -0.44,-0.11 -0.66,-0.22c-1.87,-1.21 -4.511,-1.87 -7.37,-1.87c-1.43,0 -2.751,0.22 -3.74,0.44c-0.22,0.11 -0.33,0.11 -0.55,0.11c-0.55,0 -0.881,-0.44 -0.881,-0.881c0,-0.55 0.22,-0.77 0.77,-0.991c1.32,-0.33 2.641,-0.66 4.511,-0.66c3.08,0 5.94,0.77 8.361,2.2c0.33,0.22 0.55,0.55 0.55,0.881c-0.111,0.55 -0.44,0.991 -0.991,0.991zM22.37,14.4c-0.22,0 -0.33,-0.11 -0.66,-0.22c-2.2,-1.21 -5.39,-1.98 -8.47,-1.98c-1.54,0 -3.19,0.22 -4.621,0.55c-0.22,0 -0.33,0.11 -0.66,0.11c-0.66,0.111 -1.1,-0.44 -1.1,-1.099c0,-0.659 0.33,-0.991 0.77,-1.1c1.761,-0.441 3.631,-0.661 5.611,-0.661c3.41,0 6.93,0.77 9.681,2.2c0.33,0.22 0.66,0.55 0.66,1.1c-0.11,0.66 -0.551,1.1 -1.211,1.1z",
    viewBox: "0 0 30 30",
    link: "https://www.example.com/",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white p-4">
      {/* Left: Menu */}
      <div className="flex space-x-4">
        <Link href="/store" className="hover:text-gray-300">
          Store
        </Link>
        <Link href="/subscribe" className="hover:text-gray-300">
          Subscribe
        </Link>
      </div>

      {/* Center: Logo */}
      <Link href="/">
        <div className="text-2xl font-bold">Chaebin</div>
      </Link>

      {/* Right: Social Links */}
      <div className="flex space-x-4">
        {socialIcons.map((icon) => (
          <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox={icon.viewBox}
              fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d={icon.d} fill="#fefefe" />
            </svg>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
