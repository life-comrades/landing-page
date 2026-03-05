import React from 'react';
import { type Testimonial } from "@/types";

export default function Testimonial(testimonial: Testimonial) {
  return (
    <div className="max-w-md p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div>
        {/* Quote Icon */}
        {/* <div className="text-blue-500 text-4xl mb-4">“</div> */}
        <p className="text-gray-700 italic text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="mt-6 flex items-center">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
          {testimonial.author[0]}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
          {/* <p className="text-sm text-gray-500">{testimonial.location}</p> */}
        </div>
      </div>
    </div>
  );
};

// const TestimonialList = () => {
//   const testimonials = [
//     {
//       id: 't1',
//       quote: 'The nurse was professional and caring throughout the service.',
//       author: 'Anita',
//       location: 'Chennai',
//       serviceId: 'home-nursing'
//     },
//     {
//       id: 't2',
//       quote: 'The ICU setup at home was a lifesaver for my father. Highly professional team.',
//       author: 'Vikas',
//       location: 'Chennai',
//       serviceId: 'icu-home'
//     }
//   ];

//   return (
//     <div className="bg-gray-50 py-12 px-4">
//       <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {testimonials.map((item) => (
//           <TestimonialCard
//             key={item.id}
//             quote={item.quote}
//             author={item.author}
//             location={item.location}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialList;