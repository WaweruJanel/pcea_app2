type Testimonial = { text: string; author: string };

const TestimonialsSection = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => (
  <section className="py-12 bg-gray-50">
    <h2 className="mb-8 text-2xl font-bold text-center">What People Say</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <p className="italic text-gray-700">"{testimonial.text}"</p>
          <p className="mt-2 text-sm font-medium text-right text-gray-900">
            - {testimonial.author}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
