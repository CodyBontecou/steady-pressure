export default function ContactForm() {
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form
        id="form"
        name="contact"
        method="POST"
        action="/?success=true"
        data-netlify="true"
        encType="application/x-www-form-urlencoded"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 flex rounded-md shadow-sm border border-gray-300 ">
                  <input
                    name="email"
                    type="text"
                    id="company-website"
                    className="focus:ring-gray-500 focus:border-gray-500 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="p-3 shadow-sm focus:ring-gray-500 focus:border-gray-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Send us a message!"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
