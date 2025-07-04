"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (username.trim()) {
      router.push(`/user/${username}`);
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
