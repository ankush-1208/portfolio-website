/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

export const runtime = "edge";

export const alt = "About Ankush";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={RESUME_DATA.avatarPath.src}
            alt={RESUME_DATA.name}
            width={80}
            height={80}
            style={{
              borderRadius: 128,
              marginRight: 30,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 900,
              }}
            >
              {RESUME_DATA.name}
            </h1>
            <p
              style={{
                fontSize: "20px",
                opacity: 0.8,
              }}
            >
              {RESUME_DATA.about}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
