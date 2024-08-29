// "use client";
// import { useRouter } from "next/router";

// export default function Page({ params }) {
//   const router = useRouter();
//   let state = ["Mumbai", "Pune", "Channai", "Delhi"];
//   if (state.includes(params.slug)) {
//     return (
//       <div>
//         My post :{params.slug}{" "}
//         <button type="button" onClick={() => router.push("/dashboard")}>
//           Dashboard
//         </button>
//       </div>
//     );
//   } else {
//     return <div>Page not found</div>;
//   }
// }
