
import { BottomCard } from "./BottomCard";
import { ChildrenCard } from "./ChildrenCard";
import { FollowUs } from "./FollowUs";
import { Interviews } from "./Interviews";

export function BottomCardComponent() {
  return (
    <div className="container">
      <div className="row mb-3">
        <BottomCard />
        <Interviews />
      </div>
      <div className="row mt-3">
        <ChildrenCard/>
        <FollowUs/>
        {/* <Interviews /> */}
      </div>
    </div>
  )
}

