import React, { useMemo, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { SearchIcon } from "lucide-react";
const data = [
  {
    user_id: "001",
    full_name: "John Doe",
    country: "USA",
    type: "patient",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    user_id: "002",
    full_name: "Jane Smith",
    country: "Canada",
    type: "patient",
    date_of_creation: "2024-07-24",
    status: "active",
  },
  {
    user_id: "003",
    full_name: "Carlos Ramirez",
    country: "Mexico",
    type: "patient",
    date_of_creation: "2024-07-23",
    status: "active",
  },
  {
    user_id: "004",
    full_name: "Anna Müller",
    country: "Germany",
    type: "patient",
    date_of_creation: "2024-07-22",
    status: "active",
  },
  {
    user_id: "005",
    full_name: "Yuki Tanaka",
    country: "Japan",
    type: "patient",
    date_of_creation: "2024-07-21",
    status: "active",
  },
];

export default function User() {

  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState(null);

  const filteredUsers = useMemo(() => {
    return data.filter(
      (data) =>
        data.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.user_id.includes(searchQuery)
    );
  }, [searchQuery, data]);

  const sortedUsers = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredUsers].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredUsers;
  }, [filteredUsers, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex-1 h-screen mx-[32px] mt-[32px] ">
      <div className="flex justify-between items-center mb-[24px]">
        <div>
          <h1 className="text-[#00263E] text-[24px] font-[700]">Users</h1>
          <p className="text-[#72849A]">Yano's user database</p>
        </div>

        <div className="flex justify-around items-center">
          <form className="p-[16px] ">
            <div className="flex items-center border rounded-[8px] bg-[#EEEEEE] h-[40px] px-2 ">
              <SearchIcon className="  h-4 w-4 text-gray-500" />
              <input
                className="w-full bg-transparent shadow-none border-none outline-none pl-2 "
                placeholder="Search..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <Link to="createUser">
            <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
              <span>
                <FaPlus size={14} />
              </span>
              Create a new user
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <main className="flex flex-col gap-4">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    onClick={() => requestSort("id")}
                    className="cursor-pointer "
                  >
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      User ID
                    </div>
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("name")}
                    className="cursor-pointer "
                  >
                    Full Name
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("country")}
                    className="cursor-pointer "
                  >
                    Country
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("type")}
                    className="cursor-pointer "
                  >
                    Type
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("date")}
                    className="cursor-pointer "
                  >
                    Date of creation
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("status")}
                    className="cursor-pointer "
                  >
                    Status
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("action")}
                    className="cursor-pointer "
                  >
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedUsers?.map((user) => (
                  <TableRow key={user?.user_id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        {user?.user_id}
                      </div>
                    </TableCell>
                    <TableCell>{user?.full_name}</TableCell>
                    <TableCell>{user?.country}</TableCell>
                    <TableCell>{user?.type}</TableCell>
                    <TableCell>{user?.date_of_creation}</TableCell>
                    <TableCell>{user?.status}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
