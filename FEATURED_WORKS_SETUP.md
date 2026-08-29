# 📝 Featured Works Setup Guide

## ✅ What's Been Added

Your two new projects are now in **Featured Works** section:

### 1. **LS Cycle** (/06)
   - **Description**: Rideable bike-share bicycle (FiveM asset package) with front basket, chain guard, rear ID plate with QR code, and rental control panel
   - **Tags**: GAMEDEV, FIVEM, 3D MODELING
   - **Year**: 2026
   - **Video**: Requires upload to '/public/ls-cycle-demo.mp4'
   - **Status**: Ready (waiting for video file)

### 2. **Inkspace** (/07)
   - **Description**: Collaborative infinite canvas with glassmorphic UI, real-time collaboration powered by Liveblocks + Yjs, 6 starter templates
   - **Tags**: COLLABORATION, NEXT.JS, REALTIME
   - **Year**: 2026
   - **Link**: https://task-eight-psi-64.vercel.app/
   - **Status**: ✅ Complete (live link included)

---

## 📁 Where to Put Your Video Files

### **Video Storage Location:**
Place all work demo videos in:
\\\
public/
├── ls-cycle-demo.mp4              ← Your LS Cycle video goes here
├── a_Custom_Software_Buil.mp4     (existing)
├── Screen Recording 2026-08-26 130241.mp4
├── veo-3.1-audio-1080p_a_generate_a_video_AI_.mp4
└── WhatsApp Video 2026-08-26 at 1.59.01 PM.mp4
\\\

### **Steps to Add LS Cycle Video:**

1. **Prepare your video file**
   - Format: MP4 recommended (for browser compatibility)
   - Size: Keep under 50MB for faster loading
   - Resolution: 1920×1080 or 1280×720 ideal

2. **Place video in public folder**
   - Copy/drag your ls-cycle demo video to: \d:\Dprojects\Ohmydev\OhMyDev\public\ls-cycle-demo.mp4\

3. **No code changes needed**
   - The video reference is already configured in content.ts
   - It will automatically appear in Featured Works once the file is in the public folder

---

## 🔍 How It Works

When you visit the Featured Works section:
- LS Cycle will show the description with a **Play** button (for the video)
- Inkspace will show the description with a **Visit** button (external link)
- Both appear as /06 and /07 in the work grid

The video will be loaded from the public folder and playable inline with the video player already built into SelectedWork.tsx component.

---

## 📋 Content Added to src/data/content.ts

\\\	ypescript
{
  index: "/06",
  title: "LS Cycle",
  description: "Rideable bike-share bicycle (FiveM asset package)...",
  tags: ["GAMEDEV", "FIVEM", "3D MODELING"],
  year: "2026",
  video: "/ls-cycle-demo.mp4",
},
{
  index: "/07",
  title: "Inkspace",
  description: "Collaborative infinite canvas UI...",
  tags: ["COLLABORATION", "NEXT.JS", "REALTIME"],
  year: "2026",
  href: "https://task-eight-psi-64.vercel.app/",
},
\\\

---

## ⚡ Next Steps

1. **Add your LS Cycle demo video** to \public/ls-cycle-demo.mp4\
2. **Commit and push** the video file
3. **View in browser** to verify both projects appear correctly

Ready to ship! 🚀
