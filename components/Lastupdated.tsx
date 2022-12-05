// FC component

import React from "react";

export default function LastUpdated({ timestamp }: { timestamp: Date }) {
  const dateHandler = new Intl.DateTimeFormat(["sv-SE", "en-GB"], {
    dateStyle: "full",
  });
  return (
    <div className="last-updated">
      <span>Last updated: {dateHandler.format(timestamp)}</span>
    </div>
  );
}
