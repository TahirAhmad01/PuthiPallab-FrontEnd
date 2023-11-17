"use client";
import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  Image,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "phosphor-react";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";

const Header = () => {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <Navbar fluid={true} className="bg-gray-50">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <Image
              src="/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J1vZp6TEiqy5hIf7GixH0J9s-ciz6R3qTJVSHpdQQw&s"
              alt="keep"
              width="100"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-4"
            >
              <TextInput
                id="#id-10"
                placeholder="Search anything"
                color="gray"
                sizing="sm"
                type="text"
                addon={<MagnifyingGlass size={20} color="#5E718D" />}
                addonPosition="left"
              />
              <Navbar.Link
                icon={<FacebookLogo size={20} color="#444" />}
                iconAnimation={false}
              />
              <Navbar.Link
                icon={<InstagramLogo size={20} color="#444" />}
                iconAnimation={false}
              />
              <Navbar.Link
                icon={<TwitterLogo size={20} color="#444" />}
                iconAnimation={false}
              />
            </Navbar.Container>
            <Navbar.Container className="flex gap-1  md:hidden">
              <Navbar.Toggle className="block" />
            </Navbar.Container>
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2 md:hidden"
          >
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link
                linkName="Home"
                icon={<CaretDown size={20} />}
                className="!py-0"
              />
              <Navbar.Link
                linkName="Projects"
                icon={<CaretDown size={20} />}
                className="!py-0"
              />
              <Navbar.Link
                linkName="Blogs"
                icon={<CaretDown size={20} />}
                className="!py-0"
              />
              <Navbar.Link linkName="News" className="!py-0" />
              <Navbar.Link linkName="Resources" className="!py-0" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
      {/* dashboard card */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 gap-10">
        <DashboardCard
          header="Total Projects"
          totalWork="10,720"
          desc="Lorem ipsum dolor sit amet."
        />
        <DashboardCard
          header="Total Projects"
          totalWork="10,720"
          desc="Lorem ipsum dolor sit amet."
        />
        <DashboardCard
          header="Total Projects"
          totalWork="10,720"
          desc="Lorem ipsum dolor sit amet."
        />
        <DashboardCard
          header="Total Projects"
          totalWork="10,720"
          desc="Lorem ipsum dolor sit amet."
        />
      </div>
      <div className="p-10">
        <DashboardChart />
      </div>
    </div>
  );
};

export default Header;
