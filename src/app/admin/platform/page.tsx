"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/common/button";
import Edit from "@/assets/icons/Write";
import { Input } from "@/components/common/inputs";
import ColorPicker from "react-best-gradient-color-picker"; // No need for valueToHex
import { useSettingsContext } from "@/context/Setting";


// Function to convert RGB color to Hex
const rgbToHex = (color: string) => {
  if (color.startsWith("#")) return color;

  const rgbArray = color.match(/\d+/g);
  if (!rgbArray || rgbArray.length < 3) return color;

  const hex = rgbArray
    .slice(0, 3)
    .map((x) => parseInt(x).toString(16).padStart(2, "0"))
    .join("");
  return `#${hex}`;
};

const Index = () => {
  const [colors, setColor] = useState("#3D3066");
  const [isColorModalOpen, setColorModal] = useState<boolean>(false);
  const { themeColor, updateTheme } = useSettingsContext();

  const colorOptions = ["#00D7F7", "#3D3066", "#507FFF", "#111111", "#7BA4FF"];

  const toggleColorModal = () => {
    setColorModal(!isColorModalOpen);
  };

  const handleColorChange = (newColor: any) => {

    const changeColor = rgbToHex(newColor); 
    setColor(changeColor);
    updateTheme(changeColor);
  };

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk">
      
      {/* Platform Name Section */}
      <div className="flex flex-col md:flex-row w-full mb-6">
        <h2 className="text-[24px] md:text-[36px] font-medium mb-4 md:mb-0">
          Platform
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto">
          <p className="font-[700]">Platform name</p>
          <p className="font-[400]">Input platform name</p>
        </div>
        <div className="flex w-full md:w-[70%] justify-between items-center">
          <div className="flex-[1.2]">
            <Input placeholder="HUBSTACK" disabled={true} />
          </div>
          <div className="flex-[1] flex">
            <div className="w-[50%] ml-auto">
              <Edit className="w-[31.66px] h-[31.66px] m-auto cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Logo Section */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto ">
          <p className="font-[700]">Company logo</p>
          <p className="font-[400]">Upload the company logo</p>
        </div>
        <div className="flex w-full md:w-[70%] justify-start md:justify-between items-center">
          <div className="flex flex-[1.2] items-center gap-4">
            <div className="w-[100px] h-[100px] bg-[#3D3066] rounded-[13px]">
              <Image
                src="/images/Hubstack Logo-02.png"
                alt="logo"
                height={100}
                width={100}
                className="w-[100px] h-[100px]"
              />
            </div>
            <Button variant="special" size="md" className="mr-4">
              Replace logo
            </Button>
          </div>
          <div className="flex-1 flex justify-start md:justify-end md:mt-0">
            <Button variant="danger" size="md">
              Remove
            </Button>
          </div>
        </div>
      </div>

      {/* Brand Color Section */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto">
          <p className="font-[700]">Brand colour</p>
          <p className="font-[400]">Select or customize your brand colour</p>
        </div>
        <div className="flex w-full md:w-[70%] justify-start items-start">
          <div className="flex flex-col flex-[1.2] items-start gap-4">
            <div className="w-full flex gap-4 justify-start">
              {colorOptions.map((item, key) => (
                <div
                  key={key}
                  style={{ background: item }}
                  onClick={() => handleColorChange(item)}
                  className="w-[50px] h-[50px] rounded-full cursor-pointer"
                ></div>
              ))}
            </div>

            <div
              className="flex items-center gap-2 mt-4 cursor-pointer"
              onClick={toggleColorModal}
            >
              <span className="text-gray-500">Custom colour</span>
              <div className="flex gap-2 p-2 w-[128px] border border-[#DBDBDB] rounded-lg">
                <div
                  className="w-[26px] h-[26px] rounded-md"
                  style={{ background: colors }}
                ></div>
                <span>
                  {colors} {/* Display the selected color's hex value */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Picker Modal */}
      {isColorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-6 shadow-lg w-auto">
            <h3 className="text-center text-lg font-semibold mb-4">
              Pick a Color
            </h3>
            <ColorPicker
              value={colors}
              onChange={handleColorChange}
              height={100}
              width={300}
            />
            <div className="text-right mt-4">
              <Button variant="danger" onClick={toggleColorModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Brand Images Section */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto">
          <p className="font-[700]">Brand Images</p>
          <p className="font-[400]">Upload brand images</p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2">
          <div className="h-[204px] w-full md:w-[277px] bg-[#F2F2F2]"></div>
          <div className="h-[204px] w-full md:w-[277px] bg-[#F2F2F2]"></div>
          <div className="h-[204px] w-full md:w-[277px] bg-[#F2F2F2]"></div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="w-full mt-6">
        <span className="font-[700] text-[32px] md:text-[29px]">
          Contact Details
        </span>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Location
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="Lagos, Nigeria"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Contact email
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="hello@fortbridge.co"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Contact number
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center justify-center">
            <Input
              placeholder="080 000 000 00"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* General Settings Section */}
      <div className="w-full mt-6">
        <span className="font-[700] text-[32px] md:text-[29px]">
          General Settings
        </span>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Team Invite
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="https://admin.fortbridge.co/team-invite"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Default Language
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="English (UK)"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;