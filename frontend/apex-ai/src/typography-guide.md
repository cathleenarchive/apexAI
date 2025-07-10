# Academic Typography Guide for Apex AI

## Font System
The website now uses a sophisticated academic typography system that combines scholarly authority with modern readability.

### Fonts Used
- **Headings**: Crimson Text (elegant serif, academic authority)
- **Body Text**: Inter (clean sans-serif, modern readability)
- **Fallbacks**: Source Serif Pro, Georgia, system fonts

## Typography Hierarchy

### Headings
```jsx
<h1>Main Page Title</h1>           // Largest, most important
<h2>Section Headers</h2>           // Major sections
<h3>Subsection Headers</h3>        // Content blocks
<h4>Component Titles</h4>          // Cards, features
<h5>Small Sections</h5>            // Minor groupings
<h6>Labels & Categories</h6>       // Uppercase, smaller
```

### Display Text (Hero Sections)
```jsx
<h1 className="display-1">Hero Title</h1>     // Massive impact
<h1 className="display-3">Page Hero</h1>      // Standard hero
<h2 className="display-5">Section Hero</h2>   // Section headers
```

### Body Text
```jsx
<p className="lead">Introduction paragraph</p>  // Larger, emphasized
<p>Regular body text</p>                       // Standard content
<small>Caption or fine print</small>           // Smaller details
```

## Academic Text Styles

### Academic Colors
```jsx
<h2 className="text-academic">Section Title</h2>        // Serif + blue
<h2 className="text-academic-sans">Modern Title</h2>    // Sans + blue
<p className="text-scholarly">Italic emphasis</p>       // Scholarly style
<span className="text-gradient">Gradient Text</span>    // Academic gradient
```

### Special Elements
```jsx
<blockquote>
  Important quote or citation
  <cite>Source attribution</cite>
</blockquote>

<p className="drop-cap">Paragraph with large first letter</p>

<span className="highlight-academic">Highlighted text</span>
<span className="underline-academic">Underlined text</span>

<div className="emphasis-academic">Italicized emphasis</div>
```

### Academic Lists
```jsx
<ul className="list-academic">
  <li>Academic bullet points</li>
  <li>With proper spacing</li>
</ul>
```

### Statistics & Counters
```jsx
<div className="stat-counter">95%</div>
<div className="stat-label">Success Rate</div>
```

### Testimonials
```jsx
<div className="testimonial-academic">
  "This is an academic testimonial"
  <div className="testimonial-academic-author">Dr. Jane Smith</div>
  <div className="testimonial-academic-role">Professor of Education</div>
</div>
```

### Alerts & Callouts
```jsx
<div className="alert-academic">
  <div className="alert-academic-title">Important Note</div>
  Academic-styled alert content
</div>
```

### Timeline Elements
```jsx
<div className="timeline-academic">
  <div className="timeline-date">2025</div>
  <div className="timeline-title">Major Milestone</div>
  <div className="timeline-description">Details about the event</div>
</div>
```

### Forms & UI
```jsx
<label className="form-label">Academic Form Label</label>
<input className="form-control" placeholder="Academic form styling" />

<span className="badge-academic">Academic Badge</span>
```

### Academic Links
```jsx
<a href="#" className="link-academic">Academic Link Style</a>
```

## Best Practices

### 1. Hierarchy Usage
- Use display classes for hero sections and major impact
- Use h1-h6 for content hierarchy
- Apply academic classes for educational authority

### 2. Font Pairing
- Serif fonts (Crimson Text) for headings and quotes
- Sans-serif fonts (Inter) for body text and UI elements
- Maintain consistency within components

### 3. Color Application
- `text-academic` for important headings
- `text-scholarly` for emphasized content
- `text-gradient` sparingly for special impact

### 4. Responsive Considerations
- Typography automatically scales on mobile
- Test readability across all devices
- Ensure sufficient contrast ratios

### 5. Academic Voice
- Use formal, professional language
- Apply proper citation styles
- Maintain scholarly tone in copy

## Examples in Practice

### Hero Section
```jsx
<section className="hero-gradient">
  <h1 className="display-3">Transform College Counseling</h1>
  <p className="lead">Professional subtitle content</p>
</section>
```

### Feature Card
```jsx
<div className="card">
  <h4 className="card-title text-academic">Feature Title</h4>
  <p className="card-text">Feature description content</p>
</div>
```

### Academic Quote
```jsx
<blockquote>
  Education is the most powerful weapon which you can use to change the world.
  <cite>Nelson Mandela</cite>
</blockquote>
```

### Statistics Display
```jsx
<div className="text-center">
  <div className="stat-counter">15,000+</div>
  <div className="stat-label">Students Served</div>
</div>
```

This typography system ensures consistent, professional, and academically-appropriate styling across the entire Apex AI platform. 