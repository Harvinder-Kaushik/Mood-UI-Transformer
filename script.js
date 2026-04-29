/* ============================================
   MOOD CONFIGURATIONS
   Each mood has specific colors, animations, 
   and descriptions
   ============================================ */
const MOOD_CONFIG = {
    happy: {
        emoji: '😊',
        title: 'You seem Happy!',
        description: 'Embrace the joy! Here\'s a bright, vibrant theme to match your energy.',
        colors: {
            primary: '#FFD700',      // Golden yellow
            secondary: '#FFA500',    // Orange
            bgGradient1: '#FFFACD',  // Light yellow
            bgGradient2: '#FFE4B5',  // Moccasin
            textColor: '#2d3748',    // Dark text for contrast
            accentColor: '#FF6B6B'   // Bright red accent
        },
        animationSpeed: '0.6s'
    },

    sad: {
        emoji: '😢',
        title: 'You seem Sad...',
        description: 'It\'s okay to feel down. Here\'s a calm, soothing theme to help you reflect.',
        colors: {
            primary: '#4A90E2',      // Soft blue
            secondary: '#7B68EE',    // Medium slate blue
            bgGradient1: '#E6F0FF',  // Light blue
            bgGradient2: '#DDA0DD',  // Plum
            textColor: '#2c3e50',    // Darker blue-gray
            accentColor: '#5D7B9E'   // Muted blue
        },
        animationSpeed: '1.5s'
    },

    stressed: {
        emoji: '😰',
        title: 'You seem Stressed...',
        description: 'Take a deep breath. This warm theme might help you find some comfort.',
        colors: {
            primary: '#FF6B6B',      // Coral red
            secondary: '#FFA07A',    // Light salmon
            bgGradient1: '#FFE0E0',  // Misty rose
            bgGradient2: '#FFC0CB',  // Pink
            textColor: '#3d2817',    // Dark brown
            accentColor: '#DC143C'   // Crimson
        },
        animationSpeed: '0.5s'
    },

    energetic: {
        emoji: '⚡',
        title: 'You\'re Energetic!',
        description: 'Incredible energy! Here\'s a bold, dynamic theme to fuel your momentum.',
        colors: {
            primary: '#00D4FF',      // Cyan
            secondary: '#FF00FF',    // Magenta
            bgGradient1: '#0A0E27',  // Dark navy
            bgGradient2: '#16213E',  // Darker navy
            textColor: '#FFFFFF',    // White text
            accentColor: '#00FF88'   // Neon green
        },
        animationSpeed: '0.4s'
    },

    calm: {
        emoji: '😌',
        title: 'You\'re Calm...',
        description: 'Serenity found. This soft, peaceful theme complements your tranquility.',
        colors: {
            primary: '#A8E6CF',      // Mint
            secondary: '#FFD3B6',    // Peach
            bgGradient1: '#FFAAA5',  // Pastel salmon
            bgGradient2: '#FF8B94',  // Pastel rose
            textColor: '#2c3e50',    // Soft gray-blue
            accentColor: '#7FDBCA'   // Light turquoise
        },
        animationSpeed: '1.2s'
    }
};

/* ============================================
   MOOD MAPPING FOR CUSTOM INPUTS
   Maps keywords to predefined moods
   ============================================ */
const MOOD_MAPPING = {
    // Happy mappings
    'happy': 'happy',
    'joyful': 'happy',
    'excited': 'happy',
    'great': 'happy',
    'wonderful': 'happy',
    'awesome': 'happy',
    'fantastic': 'happy',
    'blessed': 'happy',
    'lucky': 'happy',
    'grateful': 'happy',

    // Sad mappings
    'sad': 'sad',
    'blue': 'sad',
    'melancholy': 'sad',
    'down': 'sad',
    'depressed': 'sad',
    'gloomy': 'sad',
    'unhappy': 'sad',
    'miserable': 'sad',
    'lonely': 'sad',
    'disappointed': 'sad',

    // Stressed mappings
    'stressed': 'stressed',
    'anxious': 'stressed',
    'worried': 'stressed',
    'nervous': 'stressed',
    'tense': 'stressed',
    'overwhelmed': 'stressed',
    'panicked': 'stressed',
    'frantic': 'stressed',
    'angry': 'stressed',
    'frustrated': 'stressed',

    // Energetic mappings
    'energetic': 'energetic',
    'active': 'energetic',
    'vibrant': 'energetic',
    'lively': 'energetic',
    'hyper': 'energetic',
    'pumped': 'energetic',
    'motivated': 'energetic',
    'driven': 'energetic',
    'inspired': 'energetic',
    'fired up': 'energetic',

    // Calm mappings
    'calm': 'calm',
    'peaceful': 'calm',
    'serene': 'calm',
    'relaxed': 'calm',
    'tranquil': 'calm',
    'zen': 'calm',
    'chill': 'calm',
    'mellow': 'calm',
    'tired': 'calm',
    'sleepy': 'calm'
};

/* ============================================
   DOM ELEMENTS
   Cache frequently used DOM references
   ============================================ */
const moodDropdown = document.getElementById('mood-dropdown');
const moodInput = document.getElementById('mood-input');
const transformBtn = document.getElementById('transform-btn');
const moodEmoji = document.getElementById('mood-emoji');
const moodTitle = document.getElementById('mood-title');
const moodDescription = document.getElementById('mood-description');

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadLastMood();
    attachEventListeners();
    applyNightModeVariation();
});

/* ============================================
   EVENT LISTENERS
   ============================================ */
function attachEventListeners() {
    // Enable/disable button based on input
    moodDropdown.addEventListener('change', updateButtonState);
    moodInput.addEventListener('input', updateButtonState);

    // Clear dropdown when typing custom mood
    moodInput.addEventListener('input', () => {
        if (moodInput.value.trim()) {
            moodDropdown.value = '';
        }
    });

    // Clear custom input when selecting from dropdown
    moodDropdown.addEventListener('change', () => {
        if (moodDropdown.value) {
            moodInput.value = '';
        }
    });

    // Transform UI on button click
    transformBtn.addEventListener('click', handleTransform);

    // Allow Enter key to trigger transform
    moodInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !transformBtn.disabled) {
            handleTransform();
        }
    });
}

/* ============================================
   UPDATE BUTTON STATE
   Enable/disable based on input
   ============================================ */
function updateButtonState() {
    const hasDropdownValue = moodDropdown.value.trim() !== '';
    const hasInputValue = moodInput.value.trim() !== '';
    
    transformBtn.disabled = !(hasDropdownValue || hasInputValue);
}

/* ============================================
   MAIN TRANSFORM FUNCTION
   ============================================ */
function handleTransform() {
    // Get mood from either dropdown or custom input
    let selectedMood = moodDropdown.value || moodInput.value.trim().toLowerCase();

    if (!selectedMood) return;

    // If custom input, try to map it to a predefined mood
    if (moodInput.value.trim() && !moodDropdown.value) {
        selectedMood = mapCustomMood(selectedMood);
    }

    // Apply the mood theme
    applyMoodTheme(selectedMood);

    // Save to localStorage
    saveMoodToStorage(selectedMood);

    // Trigger button animation
    animateButton();
}

/* ============================================
   MAP CUSTOM MOOD TO PREDEFINED MOOD
   Tries to match keywords, falls back to random mood
   ============================================ */
function mapCustomMood(customMood) {
    // Check for exact matches or partial matches
    for (const keyword in MOOD_MAPPING) {
        if (customMood.includes(keyword)) {
            return MOOD_MAPPING[keyword];
        }
    }

    // If no match, pick a random mood
    const moods = Object.keys(MOOD_CONFIG);
    return moods[Math.floor(Math.random() * moods.length)];
}

/* ============================================
   APPLY MOOD THEME
   Updates CSS variables and DOM content
   ============================================ */
function applyMoodTheme(mood) {
    // Ensure mood exists in config
    if (!MOOD_CONFIG[mood]) {
        mood = 'calm'; // Default fallback
    }

    const config = MOOD_CONFIG[mood];
    const root = document.documentElement;

    // Generate random color variations
    const colors = generateRandomColorVariation(config.colors);

    // Apply colors to CSS variables
    root.style.setProperty('--bg-color', colors.primary);
    root.style.setProperty('--bg-gradient-1', colors.bgGradient1);
    root.style.setProperty('--bg-gradient-2', colors.bgGradient2);
    root.style.setProperty('--text-color', colors.textColor);
    root.style.setProperty('--accent-color', colors.accentColor);
    root.style.setProperty('--accent-light', lightenColor(colors.accentColor, 0.3));
    root.style.setProperty('--animation-speed', config.animationSpeed);

    // Update mood display
    moodEmoji.textContent = config.emoji;
    moodTitle.textContent = config.title;
    moodDescription.textContent = config.description;

    // Add mood class to body for mood-specific animations
    document.body.className = '';
    document.body.classList.add(`mood-${mood}`);

    // Apply night mode variation if needed
    applyNightModeVariation();
}

/* ============================================
   GENERATE RANDOM COLOR VARIATIONS
   Add subtle randomness to colors for uniqueness
   ============================================ */
function generateRandomColorVariation(colors) {
    const variation = {};

    // Add 5-10% random variation to each color
    for (const key in colors) {
        variation[key] = adjustColorBrightness(colors[key], 
            (Math.random() - 0.5) * 0.1); // -5% to +5%
    }

    return variation;
}

/* ============================================
   ADJUST COLOR BRIGHTNESS
   Lightens or darkens a hex color by a percentage
   ============================================ */
function adjustColorBrightness(hex, percent) {
    // Remove # if present
    hex = hex.replace('#', '');

    // Parse hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Adjust brightness
    r = Math.min(255, Math.max(0, Math.round(r * (1 + percent))));
    g = Math.min(255, Math.max(0, Math.round(g * (1 + percent))));
    b = Math.min(255, Math.max(0, Math.round(b * (1 + percent))));

    // Convert back to hex
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

/* ============================================
   LIGHTEN COLOR
   Creates a lighter shade of a color
   ============================================ */
function lightenColor(hex, percent) {
    return adjustColorBrightness(hex, percent);
}

/* ============================================
   APPLY NIGHT MODE VARIATION
   Darkens themes during night hours (8 PM - 6 AM)
   ============================================ */
function applyNightModeVariation() {
    const hour = new Date().getHours();
    const isNight = hour >= 20 || hour < 6;

    const root = document.documentElement;
    
    if (isNight) {
        // Apply night mode brightness reduction
        root.style.setProperty('--brightness-modifier', '0.85');
        document.body.style.opacity = '0.95';
    } else {
        root.style.setProperty('--brightness-modifier', '1');
        document.body.style.opacity = '1';
    }
}

/* ============================================
   ANIMATE BUTTON
   Visual feedback when button is clicked
   ============================================ */
function animateButton() {
    transformBtn.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        transformBtn.style.transform = 'scale(1)';
    }, 100);
}

/* ============================================
   LOCALSTORAGE MANAGEMENT
   Save and load mood preferences
   ============================================ */
function saveMoodToStorage(mood) {
    localStorage.setItem('lastMood', mood);
    localStorage.setItem('lastMoodTime', new Date().toISOString());
}

function loadLastMood() {
    const lastMood = localStorage.getItem('lastMood');
    const lastTime = localStorage.getItem('lastMoodTime');

    if (lastMood && lastTime) {
        // Only apply if less than 24 hours old
        const timeDiff = new Date() - new Date(lastTime);
        if (timeDiff < 24 * 60 * 60 * 1000) {
            applyMoodTheme(lastMood);
            moodDropdown.value = lastMood;
            updateButtonState();
        }
    }
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Convert hex color to RGB (for future use with filters)
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

// Get luminance of a color (for accessibility)
function getLuminance(hex) {
    const rgb = hexToRgb(hex);
    const a = [rgb.r, rgb.g, rgb.b].map(x => {
        x = x / 255;
        return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/* ============================================
   EASTER EGGS / SPECIAL FEATURES
   ============================================ */

// Keyboard shortcut: Press 'M' to open mood selector
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm' && !document.activeElement.matches('input, select, textarea')) {
        moodDropdown.focus();
    }
});

// Keyboard shortcut: Press 'T' to transform (if mood is selected)
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't' && !document.activeElement.matches('input, select, textarea')) {
        if (!transformBtn.disabled) {
            handleTransform();
        }
    }
});

/* ============================================
   CONSOLE MESSAGE
   Fun welcome message for developers
   ============================================ */
console.log('%c🎨 Mood → UI Transformer', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cWelcome! Try different moods to see the magic happen.', 'color: #667eea; font-size: 12px;');
console.log('%cKeyboard Shortcuts:', 'color: #667eea; font-weight: bold;');
console.log('%cPress M - Focus mood selector', 'color: #667eea;');
console.log('%cPress T - Transform UI', 'color: #667eea;');
