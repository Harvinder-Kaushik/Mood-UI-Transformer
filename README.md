# 🎨 Mood → UI Transformer

A dynamic, interactive web application that transforms the entire UI based on your mood. Built with pure HTML, CSS, and Vanilla JavaScript.

## 🚀 Features

✨ **5 Predefined Moods:**
- 😊 **Happy** - Bright, vibrant colors with bounce animations
- 😢 **Sad** - Calm blues and purples with fade effects
- 😰 **Stressed** - Warm colors with shake animations
- ⚡ **Energetic** - Bold neon colors with pulse effects
- 😌 **Calm** - Soft pastels with smooth transitions

✨ **Smart Features:**
- Custom mood input with intelligent keyword mapping
- Dynamic color generation with random variations
- Night mode detection (darkens themes 8 PM - 6 AM)
- localStorage support - remembers your last mood
- Smooth CSS transitions between themes
- Responsive design (mobile-friendly)
- Keyboard shortcuts (Press 'M' for mood, 'T' for transform)

✨ **Modern Design:**
- Glassmorphism UI with backdrop blur effects
- Gradient backgrounds
- Smooth animations and transitions
- Floating decorative shapes
- Emoji-based mood indicators

## 📁 Project Structure

```
Mood-UI-Transformer/
├── index.html      # HTML structure
├── style.css       # Styling with CSS variables
├── script.js       # Core functionality
└── README.md       # This file
```

## 🎯 How to Use

### 1. **Open the Project**
Simply open `index.html` in any modern web browser. No server or installation needed!

### 2. **Select a Mood**
Choose from:
- **Dropdown**: Pick from 5 predefined moods (Happy, Sad, Stressed, Energetic, Calm)
- **Custom Input**: Type any emotion (e.g., "tired", "motivated", "confused")

### 3. **Click "Transform UI"**
Watch as the entire interface transforms:
- Background gradients change
- Text colors update
- Animations play
- Mood message displays

### 4. **Keyboard Shortcuts**
- Press **M** - Focus on mood dropdown
- Press **T** - Transform the UI (if a mood is selected)
- Press **Enter** in text input - Transform

## 🎨 How It Works

### CSS Variables System
All colors and animations are controlled via CSS variables defined in `:root`:
- `--bg-gradient-1` & `--bg-gradient-2` - Background gradients
- `--text-color` - Text color
- `--accent-color` - Primary accent
- `--animation-speed` - Animation duration

When you select a mood, JavaScript updates these variables, and all styles automatically transition to the new theme.

### Mood Mapping Logic
When you type a custom mood, the app:
1. Checks if keywords match predefined moods
2. Examples: "tired" → Calm, "angry" → Stressed, "lucky" → Happy
3. Falls back to random mood if no match found
4. All changes happen instantly

### Color Variations
Each time you transform, colors get 5-10% random variations to ensure uniqueness and prevent monotony.

### Night Mode
Between 8 PM and 6 AM, all themes automatically darken by 15% for a comfortable viewing experience.

## 💻 Code Highlights

### Pure Vanilla JavaScript
- No frameworks or libraries
- Clean, well-commented code
- Modular functions for easy maintenance

### Dynamic Styling
```javascript
// Example: Updating theme
root.style.setProperty('--bg-gradient-1', '#FFFACD');
root.style.setProperty('--text-color', '#2d3748');
// CSS automatically transitions smoothly!
```

### Mood Configuration Object
Easy to extend - add new moods by adding entries to `MOOD_CONFIG`.

## 🌙 Technical Details

- **HTML5** with semantic markup
- **CSS3** with variables, gradients, animations, and media queries
- **JavaScript (ES6+)** with:
  - DOM manipulation
  - LocalStorage API
  - Event handling
  - Color utilities
  - Responsive animations

## 📱 Browser Support

Works on all modern browsers:
- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎮 Try These Moods!

**Predefined:**
- happy
- sad
- stressed
- energetic
- calm

**Custom Examples:**
- "tired" → Calm mood
- "angry" → Stressed mood
- "lucky" → Happy mood
- "motivated" → Energetic mood
- "blue" → Sad mood

## 🚀 Future Enhancements

Possible additions (without frameworks):
- Sound effects for mood transformation
- Mood history tracking
- Export/share mood themes
- Accessibility improvements (voice input)
- Weather-based mood suggestions
- Time-based mood automation

## 📝 License

Free to use and modify for personal and commercial projects!

## 👨‍💻 Made with ❤️

Created as a pure vanilla JavaScript project to showcase modern web development without frameworks.

---

**Enjoy transforming your UI based on your mood! 🎨✨**
