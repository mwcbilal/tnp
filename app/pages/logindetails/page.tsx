"use client";
import { useState } from "react";
import Image from "next/image";
import edit from "../../../assets/logindetails/Edit.png";
import { MdOutlineDownloadDone } from "react-icons/md";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [username, setUsername] = useState("John Doe");
  const [editingusername, setEditingusername] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [editingmail, setEditingmail] = useState(false);
  const [email, setEmail] = useState("asadkhan@gmailcom");
  const [newEmail, setNewEmail] = useState("");
  const [edditingpassword, setEditingpassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("abcd1234");

  return (
    <div className="w-full h-full flex justify-center mb-[5rem]">
      <div className="lg:w-[50%] md:w-[70%] w-[90%] flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-2">
          <div className="w-14 h-14 rounded-full bg-gray-400"></div>
          <button className="border-none font-semibold  w-[95px]">
            Edit Image
          </button>
        </div>
        <div className="flex flex-col w-full gap-16">
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <div className="sm:w-[45%] w-[90%] flex flex-col gap-2">
              <p>Name</p>
              {editingusername ? (
                <div className="w-full relative">
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="py-2 pr-10 pl-3 border border-gray-300 rounded-lg w-full absolute z-0"
                  />
                  <button
                    className="absolute z-10 w-8 border-none left-[90%] mt-2"
                    onClick={() => {
                      setEditingusername(false);
                      setUsername(newUsername);
                    }}
                  >
                    <MdOutlineDownloadDone size={25} />
                  </button>
                </div>
              ) : (
                <div className="w-full bg-yellow-400 relative">
                  <input
                    type="text"
                    value={username}
                    readOnly={true}
                    className="py-2 pr-10 pl-3 border border-gray-300 rounded-lg absolute  w-full z-0"
                  />
                  <button
                    className="absolute z-10 w-8 border-none left-[90%] mt-2"
                    onClick={() => {
                      setNewUsername(username);
                      setEditingusername(true);
                    }}
                  >
                    <Image src={edit} alt="edit icon" />
                  </button>
                </div>
              )}
            </div>
            <div className="sm:w-[45%] w-[90%] sm:mt-0 mt-10 flex flex-col gap-2">
              <p>Email</p>
              {editingmail ? (
                <div className="w-full relative">
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="py-2 pr-10 pl-3 border border-gray-300 rounded-lg w-full absolute z-0"
                  />
                  <button
                    className="absolute z-10 w-8 border-none left-[90%] mt-2"
                    onClick={() => {
                      setEmail(newEmail);
                      setEditingmail(false);
                    }}
                  >
                    <MdOutlineDownloadDone size={25} />
                  </button>
                </div>
              ) : (
                <div className="w-full bg-yellow-400 relative">
                  <input
                    type="text"
                    value={email}
                    readOnly={true}
                    className="py-2 pr-10 pl-3 border border-gray-300 rounded-lg absolute  w-full z-0"
                  />
                  <button
                    className="absolute z-10 w-8 border-none left-[90%] mt-2"
                    onClick={() => {
                      setEditingmail(true);
                      setNewEmail(email);
                    }}
                  >
                    <Image src={edit} alt="edit icon" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="w-[93%] flex flex-col gap-2 ">
            <p>Your Password</p>
            {edditingpassword ? (
              <div className="w-full flex flex-col gap-2">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="py-2 pr-10 pl-3 border border-gray-300 rounded-lg w-full "
                />
                <button
                  className=" w-[140px] border-none text-green-400 text-sm "
                  onClick={() => {
                    setEditingpassword(false);
                    setPassword(newPassword);
                  }}
                >
                  Confirm Password
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-2">
                <input
                  type="password"
                  value={password}
                  readOnly={true}
                  className="py-2 pr-10 pl-3 border border-gray-300 rounded-lg  w-full"
                />
                <button
                  className="w-[140px]  border-none text-red-600 text-sm "
                  onClick={() => {
                    setNewPassword(password);
                    setEditingpassword(true);
                  }}
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
