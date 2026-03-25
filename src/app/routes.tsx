import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { CreateVideo } from "./pages/CreateVideo";
import { VoiceStudio } from "./pages/VoiceStudio";
import { StoryLibrary } from "./pages/StoryLibrary";
import { Analytics } from "./pages/Analytics";
import { Billing } from "./pages/Billing";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "create", Component: CreateVideo },
      { path: "voice-studio", Component: VoiceStudio },
      { path: "library", Component: StoryLibrary },
      { path: "analytics", Component: Analytics },
      { path: "billing", Component: Billing },
      { path: "settings", Component: Settings },
    ],
  },
]);
