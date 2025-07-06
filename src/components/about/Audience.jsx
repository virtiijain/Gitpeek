import { User, Briefcase, Users } from "lucide-react";

export function Audience() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Who is GitPeek for?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Developer Card */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <User className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developers</h3>
            <p className="text-gray-600">
              Showcase your GitHub work in a clean, visual way to stand out to recruiters or collaborators.
            </p>
          </div>

          {/* Recruiters Card */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Briefcase className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Recruiters</h3>
            <p className="text-gray-600">
              Quickly assess a candidate’s coding skills, projects, and activity without digging through GitHub.
            </p>
          </div>

          {/* Teams Card */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Users className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teams & Collaborators</h3>
            <p className="text-gray-600">
              Evaluate open-source contributors or potential teammates easily and visually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

