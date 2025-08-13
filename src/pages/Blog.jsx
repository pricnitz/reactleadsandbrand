import React from 'react'

function Blog() {
  return (
    <div className="w-full mx-auto bg-primary relative">
      <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4">
        <h1 className="text-4xl font-bold text-white font-raleway">Our Blog</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-[#111] text-white rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-300 flex-grow">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="mt-4 inline-block text-sm text-white hover:text-gray-300 transition"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog