# AppStore

Currently, two official plugins are available:


## 📦 NPM Packages Used

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.0 | UI library |
| react-dom | ^19.2.0 | React DOM rendering |
| react-router | ^7.13.0 | Client-side routing |
| firebase | ^12.9.0 | Authentication and backend |
| tailwindcss | ^4.1.18 | CSS framework |
| @tailwindcss/vite | ^4.1.18 | Tailwind Vite plugin |
| daisyui | ^5.5.18 | Component library |
| react-icons | ^5.5.0 | Icon library |
| lucide-react | ^0.563.0 | Modern icons |
| swiper | ^12.1.0 | Carousel library |
| vite | ^7.3.1 | Build tool |

## 🎯 Features

- App discovery and browsing
- Trending apps section (sorted by highest ratings)
- App detail pages with ratings and downloads
- Install/uninstall toggle functionality
- Review system with 1-5 star ratings and comments
- Firebase authentication (Login/Register)
- User profile management
- Fully responsive design for all devices
- Smooth page transitions with React Router

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Create `.env.local` with Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Open [http://localhost:5173](http://localhost:5173)

---

**Built with React, Vite, and Firebase**
