import React from "react";

type AmenityProps = {
  icon: React.ReactNode;
  text: string;
  unavailable?: boolean;
};

const Amenity = ({ icon, text, unavailable = false }: AmenityProps) => (
  <div className="flex items-center space-x-3 p-2">
    <div className={unavailable ? "text-gray-400" : "text-gray-700"}>
      {icon}
    </div>
    <div className={unavailable ? "text-gray-400" : "text-gray-700"}>
      {text}
    </div>
  </div>
);

export function Amenities() {
  return (
    <div className="w-full max-w-6xl mx-auto px-12 py-8">
      <h3 className="text-3xl font-bold mb-8">Amenities</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g fill="currentColor">
                  <path d="M28.965 19.578h-2.072V16.28a4.057 4.057 0 0 0-4.048-4.066h-.187a4.04 4.04 0 0 0-3.303 1.726 4.054 4.054 0 0 0-3.293-1.716h-.186a4.025 4.025 0 0 0-3.293 1.716 4.026 4.026 0 0 0-3.293-1.716h-.186a4.057 4.057 0 0 0-4.05 4.066v3.287H3.036a1.04 1.04 0 0 0 0 2.08h2.02v3.286a4.057 4.057 0 0 0 4.049 4.067h.186a4.025 4.025 0 0 0 3.293-1.716 4.026 4.026 0 0 0 3.293 1.715h.186a4.04 4.04 0 0 0 3.303-1.726A4.054 4.054 0 0 0 22.658 29h.187a4.057 4.057 0 0 0 4.049-4.066v-3.266h2.07a1.04 1.04 0 0 0 0-2.08v-.01Zm-17.666 5.387c0 1.05-.85 1.913-1.906 1.913H8.99a1.911 1.911 0 0 1-1.906-1.913V16.25c0-1.05.85-1.914 1.906-1.914h.403c1.046 0 1.906.853 1.906 1.914v8.715Zm6.782 0c0 1.05-.849 1.913-1.905 1.913h-.404a1.911 1.911 0 0 1-1.905-1.913V16.25c0-1.05.849-1.914 1.905-1.914h.404c1.046 0 1.905.853 1.905 1.914v8.715Zm6.783-.01c0 1.05-.85 1.913-1.905 1.913h-.404a1.911 1.911 0 0 1-1.906-1.913v-8.716c0-1.05.85-1.913 1.906-1.913h.404c1.045 0 1.905.852 1.905 1.913v8.715ZM10.802 6.182c-.156-.083-.3-.156-.425-.228-1.025-.645-1.056-1.508-1.066-1.862v-.094c-.114-1.404-2.113-1.216-2.113 0 0 2.372 1.305 3.38 2.827 4.067 1.388.624 1.346 2.1 1.346 2.1 0 1.311 2.32 1.342 2.102-.03-.455-2.809-1.77-3.474-2.66-3.932l-.011-.02ZM19.086 6.182c-.155-.083-.3-.156-.425-.228-1.025-.645-1.056-1.508-1.066-1.862v-.094c-.114-1.404-2.113-1.216-2.113 0 0 2.372 1.305 3.38 2.827 4.067 1.388.624 1.346 2.1 1.346 2.1 0 1.311 2.32 1.342 2.102-.03-.455-2.809-1.77-3.474-2.66-3.932l-.011-.02Z"></path>
                </g>
              </svg>
            }
            text="Central heating"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M26 9H3V6a1 1 0 0 0-2 0v20a1 1 0 1 0 2 0v-4h26v4a1 1 0 0 0 2 0V14a5 5 0 0 0-5-5ZM3 11h9v9H3v-9Zm11 9v-9h12a3 3 0 0 1 3 3v6H14Z"
                ></path>
              </svg>
            }
            text="Bed"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M9 11V5a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0Zm18-6v23a1 1 0 1 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92Zm-2 1.738C20.979 9.808 20.191 17.29 20.038 20H25V6.738ZM14.986 4.836a1 1 0 1 0-1.972.33L14 11.078a4 4 0 0 1-8 0l.985-5.914a1 1 0 1 0-1.972-.329l-1 6A1.02 1.02 0 0 0 4 11a6.009 6.009 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.009 6.009 0 0 0 16 11c0-.055-.005-.11-.014-.164l-1-6Z"
                ></path>
              </svg>
            }
            text="Private kitchenware"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M17.5 25.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12.135-14.625a21.5 21.5 0 0 0-27.27 0 1 1 0 0 0 1.27 1.546 19.5 19.5 0 0 1 24.73 0 1 1 0 1 0 1.27-1.546Zm-4.01 4.471a15.5 15.5 0 0 0-19.243 0 1 1 0 1 0 1.243 1.568 13.5 13.5 0 0 1 16.758 0 1 1 0 1 0 1.242-1.568Zm-4.032 4.47a9.506 9.506 0 0 0-11.178 0 1 1 0 1 0 1.178 1.618 7.5 7.5 0 0 1 8.822 0 1 1 0 0 0 1.178-1.618Z"
                ></path>
              </svg>
            }
            text="WiFi"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g fill="currentColor">
                  <path d="M26.58 15.88h-9.3a2.408 2.408 0 0 0-2.42 2.405v7.311A2.408 2.408 0 0 0 17.28 28h9.3c1.34 0 2.42-1.073 2.42-2.404v-7.311a2.408 2.408 0 0 0-2.42-2.404Zm.88 9.637c0 .536-.44.973-.98.973h-9.12a.978.978 0 0 1-.98-.973v-2.96s.02-.06.06-.06h10.92s.08.04.08.08v2.92l.02.02Zm0-4.351s-.02.06-.06.06H16.48s-.08-.04-.08-.08v-2.92c0-.537.44-.974.98-.974h9.12c.54 0 .98.437.98.973v2.96l-.02-.02Z"></path>
                  <path d="m16.24 10.576-2.58-5.543a1.827 1.827 0 0 0-1.64-1.053H6.86c-.72 0-1.38.417-1.66 1.093l-3.04 5.543c-.52 1.192.36 2.523 1.66 2.523h4.4v12.894H6.14a1 1 0 0 0-1 .994c0 .556.44.993 1 .993h6.14a1 1 0 0 0 1-.993.987.987 0 0 0-1-.994H10.2V13.14h4.4c1.32 0 2.2-1.37 1.64-2.563Zm-3.32 1.212H5.48c-.9 0-1.52-.914-1.14-1.748l2.1-3.835c.2-.457.66-.755 1.14-.755h3.56c.48 0 .94.279 1.14.716L14.06 10c.38.835-.22 1.768-1.14 1.768v.02Z"></path>
                </g>
              </svg>
            }
            text="Living room furniture"
          />
        </div>

        <div className="space-y-4">
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M26 4H6C4.895 4 4 4.895 4 6v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v4H6V6h20zm0 6v14H6V12h20zM10 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
                <path fill="currentColor" d="M9 16h14v8H9zm1 1v6h12v-6H10z" />
              </svg>
            }
            text="Oven"
          />

          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M26 6H6c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V8c0-1.105-.895-2-2-2zm0 18H6V8h20v16z"
                />
                <path
                  fill="currentColor"
                  d="M8 10h12v12H8zm16 2h2v2h-2zm0 4h2v2h-2zm-3-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
            }
            text="Microwave"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.293-5.293a1 1 0 1 0-1.415 1.415L13.587 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm0 17H5V10h22v15Z"
                ></path>
              </svg>
            }
            text="TV"
          />

          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M28 12H4c-.552 0-1 .448-1 1s.448 1 1 1h1v10c0 .552.448 1 1 1s1-.448 1-1v-10h18v10c0 .552.448 1 1 1s1-.448 1-1v-10h1c.552 0 1-.448 1-1s-.448-1-1-1z"
                />
                <path
                  fill="currentColor"
                  d="M26 10H6c-.552 0-1 .448-1 1s.448 1 1 1h20c.552 0 1-.448 1-1s-.448-1-1-1z"
                />
              </svg>
            }
            text="Dining Table"
          />

          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M24 14h-2V8c0-2.206-1.794-4-4-4h-4c-2.206 0-4 1.794-4 4v6H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2v6c0 .552.448 1 1 1s1-.448 1-1v-6h8v6c0 .552.448 1 1 1s1-.448 1-1v-6h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"
                />
                <path
                  fill="currentColor"
                  d="M20 8v6h-8V8c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2z"
                />
                <path fill="currentColor" d="M8 16v4h16v-4H8z" />
              </svg>
            }
            text="Armrest Chair"
          />
        </div>

        <div className="space-y-4">
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g fill="currentColor">
                  <path d="M10 7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M8 18a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm3.13-3.506a6 6 0 0 0 8.376 8.376 1.003 1.003 0 0 1-.213-.163l-8-8a1.003 1.003 0 0 1-.163-.213Zm1.364-1.364c.076.044.148.098.213.163l8 8c.065.065.12.137.163.213a6 6 0 0 0-8.376-8.376Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M8.182 3c-.841 0-1.619.377-2.176.888C5.455 4.393 5 5.143 5 6v20c0 .857.455 1.607 1.006 2.112.557.51 1.335.888 2.176.888h15.636c.841 0 1.619-.377 2.176-.888C26.545 27.607 27 26.857 27 26V6c0-.857-.455-1.607-1.006-2.112-.557-.51-1.335-.888-2.176-.888H8.182ZM7 6c0-.143.09-.393.358-.638.26-.24.574-.362.824-.362h15.636c.25 0 .563.123.824.362.267.245.358.495.358.638v20c0 .143-.09.393-.358.638-.26.24-.574.362-.824.362H8.182c-.25 0-.563-.123-.824-.362C7.09 26.393 7 26.143 7 26V6Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            }
            text="Washing machine"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M26 4H6C4.895 4 4 4.895 4 6v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v4H6V6h20zm0 6v14H6V12h20zm-16-4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
                <path
                  fill="currentColor"
                  d="M8 16h16v2H8zm0 4h16v2H8zm0 4h16v2H8z"
                />
              </svg>
            }
            text="Dishwasher"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M30.196 21.4 17.666 12 20.6 9.8a1 1 0 0 0 .4-.8 5 5 0 0 0-10 0 1 1 0 0 0 2 0 3 3 0 0 1 5.962-.473l-3.544 2.66-.035.026L1.804 21.4A2 2 0 0 0 3 25h26a2 2 0 0 0 1.2-3.6h-.004ZM29 23H3l13-9.75L29 23Z"
                ></path>
              </svg>
            }
            text="Bedroom Closet"
          />

          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M30.196 21.4 17.666 12 20.6 9.8a1 1 0 0 0 .4-.8 5 5 0 0 0-10 0 1 1 0 0 0 2 0 3 3 0 0 1 5.962-.473l-3.544 2.66-.035.026L1.804 21.4A2 2 0 0 0 3 25h26a2 2 0 0 0 1.2-3.6h-.004ZM29 23H3l13-9.75L29 23Z"
                ></path>
              </svg>
            }
            text="Corridor Closet"
          />
          <Amenity
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 6a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2h-2v19a1 1 0 1 1-2 0v-3h-6.818c-.841 0-1.619-.377-2.176-.888C15.455 21.607 15 20.857 15 20v-7H7v13a1 1 0 1 1-2 0V7H3a1 1 0 0 1-1-1Zm5 1v4h18V7H7Zm18 11v3h-6.818c-.25 0-.563-.123-.824-.362C17.09 20.393 17 20.143 17 20v-2h8Zm0-2h-8v-3h8v3Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            text="Desk"
          />
        </div>
      </div>
    </div>
  );
}
