export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imagePlaceholder: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "portland-food-cart-pod-scene",
    title: "Inside Portland's Food Cart Pods: Where Community Meets Cuisine",
    date: "2026-06-07",
    excerpt:
      "Step into one of Portland's iconic food cart pods — where sizzling grills, global flavors, and neighborhood regulars gather under canopies in the shadow of the city's eclectic architecture.",
    content: `There's a moment when you round the corner and the smell hits you before the scene does — cumin and charred onion, fresh tortillas warming on a comal, maybe a wok flashing blue flame. Welcome to a Portland food cart pod, the beating heart of the city's most democratic dining experience.

**More Than a Meal**

Portland's food cart pods aren't just places to eat. They're neighborhood gathering spots, culinary incubators, and living proof that great food doesn't need a fancy storefront. The image captured here — a bustling cart under a canopy, backed by a warm brick facade — is a scene repeated dozens of times across the city, each pod with its own personality.

What makes these pods special is the intimacy. You're standing feet from the cook, watching your food being made, chatting with the person next to you in line. There's no pretense, no white tablecloths — just really good food served with genuine pride.

**The Architecture of a Pod**

Look at the setup: a compact cart or trailer, often with a serving window facing a shared seating area. Canopies and tents shield diners from Portland's frequent drizzle. Picnic tables, string lights, and the occasional potted plant create an atmosphere that's part backyard cookout, part street market.

The brick buildings that often back these pods tell their own story — many are repurposed industrial or commercial spaces that have found new life as anchors for these micro-restaurant communities. It's adaptive reuse at its most delicious.

**What to Order**

The beauty of a food cart pod is variety. At a single pod you might find:

- **Authentic Mexican** — al pastor tacos carved from a vertical spit, with fresh pineapple and handmade tortillas
- **Thai street food** — pad see ew with that elusive "wok hei" smoky char, or a proper boat noodle soup
- **Middle Eastern** — shawarma wraps loaded with pickled turnips and garlic sauce
- **Korean fusion** — gochujang-glazed fried chicken in a bento box
- **Vegan everything** — because this is Portland, and plant-based options are everywhere

**The Regulars**

Every pod has its regulars. The construction worker who gets the same lunch every day. The couple on a cheap date. The remote worker with a laptop and a cold brew. The food cart pod is Portland's great equalizer — everyone eats side by side.

**Finding Your Pod**

Portland has over 500 food carts organized into pods across the city. Some of the most beloved include Cartopia on SE Hawthorne, Prost Marketplace on N Mississippi, and the Portland Mercado on SE 72nd. But the best pod might be the one in your own neighborhood — the one you stumble upon by accident and return to every week.

Next time you're in Portland, skip the sit-down restaurant. Follow the smells, find the canopy, and eat like a local. The food is better, the price is friendlier, and the stories are richer.`,
    imagePlaceholder: "/images/food-cart-pod.jpg",
    tags: ["Food", "Neighborhoods", "Culture", "Budget Travel"],
  },
  {
    slug: "exploring-portlands-best-food-carts",
    title: "Exploring Portland's Best Food Carts",
    date: "2026-03-10",
    excerpt:
      "From Thai to tacos, dive into Portland's legendary food cart pods — where some of the city's best meals are served out of tiny trailers.",
    content: `Portland's food cart scene is legendary. With over 500 carts scattered across the city in organized pods, you'll find some of the most creative, affordable, and delicious meals in the Pacific Northwest.

**Why Food Carts?**

Portland's food cart culture grew from the city's DIY ethos. Low barriers to entry mean first-generation immigrants, classically trained chefs, and curious home cooks all bump elbows. The result is a global culinary tour on a budget.

**Must-Visit Pods**

- **Cartopia (SE Hawthorne & 12th):** The OG pod. Late-night-friendly with carts serving everything from decadent grilled cheese to authentic Thai.
- **Prost Marketplace (N Mississippi):** German-inspired bratwurst sits next to some of the city's best Middle Eastern and Mexican food.
- **Portland Mercado (SE 72nd):** Eastside Latin American hub with incredible pupusas, tamales, and aguas frescas.
- **Bite On Belmont (SE Belmont):** A tight neighborhood pod with rotating carts — always something new.

**Pro Tips**

Cash is king at many carts, though card readers are increasingly common. Lunch lines form fast at the popular pods, so arrive early or at off-peak hours. Follow your favorites on social media — carts rotate locations more than you'd think.

The beauty of Portland's food cart scene is that it's ever-evolving. Every visit is a chance to discover your new favorite meal from a tiny window on the sidewalk.`,
    imagePlaceholder: "/images/food-cart.svg",
    tags: ["Food", "Neighborhoods", "Budget Travel"],
  },
  {
    slug: "portland-bridges-walking-guide",
    title: "Portland's Bridges: A Walking Guide to the City of Spans",
    date: "2026-03-05",
    excerpt:
      "Cross all 12 of Portland's Willamette River bridges — each with its own story, architecture, and stunning views of the Rose City skyline.",
    content: `Portland is called "Bridgetown" for good reason. Twelve bridges span the Willamette River within city limits, each with distinct character. Walking them is one of the best ways to understand Portland's geography and history.

**The Must-See Bridges**

- **St. Johns Bridge:** Gothic towers rising from Forest Park. Portland's most beautiful bridge and a photographer's dream, especially at sunrise.
- **Hawthorne Bridge:** The oldest highway bridge in Portland (1910). Pedestrian walkways offer unobstructed skyline views.
- **Tilikum Crossing:** The newest (2015) and car-free. Light rail, buses, cyclists, and pedestrians only — a glimpse of Portland's transit future.
- **Steel Bridge:** The world's only double-deck bridge with independent lifts. Watch the lower deck rise for river traffic — it's mesmerizing.

**A Great Walk**

Start at the St. Johns Bridge, walk south along the Willamette Greenway Trail, cross on the Broadway Bridge, loop through the Pearl District, and finish at the lively Eastbank Esplanate. It's about 8 miles of nonstop Portland personality.

Whether you're an architecture buff, a photographer, or just someone who loves a good stroll, Portland's bridges deliver.`,
    imagePlaceholder: "/images/bridge.svg",
    tags: ["Walking", "Architecture", "Outdoors"],
  },
  {
    slug: "funny-facts-portland-is-weird",
    title: "Weird & Wonderful: Fun Facts About Portland",
    date: "2026-02-28",
    excerpt:
      "From the world's smallest city park to a volcano inside city limits — Portland's quirky side runs deep. Here are the facts that make the Rose City one-of-a-kind.",
    content: `Portland's unofficial motto is "Keep Portland Weird," and the city earns it. Beyond the craft beer and coffee culture lies a city packed with genuine oddities and delightful surprises.

**The Quirky Classics**

- **Mill Ends Park:** At 24 inches in diameter, it's the world's smallest city park — located on a traffic median on Naito Parkway. It once had a swimming pool (for butterflies) and a Ferris wheel (crane-delivered).
- **Mt. Tabor:** An actual cinder cone volcano, inside city limits, turned into a park. Hike to the top for 360-degree views.
- **The Rose City:** Portland has grown roses since 1888. The International Rose Test Garden in Washington Park has over 10,000 bushes.
- **Voodoo Doughnut:** Love it or hate it, the original Powell's location started a global phenomenon with maple bacon bars and rude-shaped pastries.

**The Unexpected**

Portland had a thriving Shanghai tunnel system (now mostly sealed). It's home to the only leprechaun community in North America (Mill Ends Park, naturally). And Powell's City of Books occupies an entire city block — the world's largest independent bookstore.

Portland's weirdness isn't manufactured. It's organic, community-driven, and deeply endearing. Come for the coffee, stay for the charm.`,
    imagePlaceholder: "/images/weird.svg",
    tags: ["Culture", "Fun Facts", "History"],
  },
  {
    slug: "portland-coffee-shops-guide",
    title: "The Ultimate Portland Coffee Shop Guide",
    date: "2026-02-20",
    excerpt:
      "Portland takes coffee seriously. From third-wave roasters to cozy neighborhood cafés, here's where to get your perfect cup in the Rose City.",
    content: `Portland has more coffee shops per capita than almost any city in America. The scene is competitive, which means quality is consistently high and innovation never stops.

**The Roasters**

- **Stumptown Coffee Roasters:** The pioneer. Their Hair Bender blend is iconic. The SE Division flagship is a must-visit.
- **Heart Coffee:** Minimalist Scandinavian-inspired roasting. Their single-origin pour-overs are exceptional.
- **Coava Coffee:** Industrial-chic spaces with meticulously sourced beans. The Main Street location is stunning.
- **Good Coffee:** No fuss, just great coffee. Multiple locations, consistently excellent.

**Neighborhood Gems**

- **Either/Or (SE Division):** Coffee by day, cocktail bar by night. Brilliant design.
- **Deadstock Coffee (Old Town):** Sneaker-themed café celebrating Black culture. The "LeBronald Latte" is legendary.
- **Nossa Familia (SE Industrial):** Brazilian-grown beans, direct trade, and a gorgeous hidden courtyard.

**What Makes Portland Coffee Different**

It's the culture. Baristas here genuinely care about extraction, sourcing, and hospitality. Don't be afraid to ask questions — Portland's coffee community is welcoming and passionate.`,
    imagePlaceholder: "/images/coffee.svg",
    tags: ["Coffee", "Food", "Neighborhoods"],
  },
  {
    slug: "day-trips-from-portland",
    title: "Day Trips from Portland: 5 Escapes Within 90 Minutes",
    date: "2026-02-15",
    excerpt:
      "Waterfalls, wine country, coastal beaches, and mountain trails — Portland's location makes it the perfect basecamp for Pacific Northwest adventures.",
    content: `One of Portland's greatest assets is its location. Within 90 minutes you can be standing in a rainforest, sipping Pinot Noir, or watching waves crash on a wild coastline.

**1. Columbia River Gorge (30 min)**

Multnomah Falls is the star, but the real magic is in the lesser-known trails. Punchbowl Falls, Wahclella Falls, and the Mosier Plateau offer solitude and stunning scenery. Drive the Historic Columbia River Highway for jaw-dropping views.

**2. Willamette Valley Wine Country (45-90 min)**

Oregon's Pinot Noir is world-class. Towns like Dundee, McMinnville, and Newberg are packed with tasting rooms. Many offer stunning vineyard views and farm-to-table food pairings.

**3. Cannon Beach & the Oregon Coast (90 min)**

Haystack Rock, tidepools, and moody Pacific sunsets. Cannon Beach is the most accessible coastal town, but drive further to Ecola State Park or Oswald West State Park for dramatic cliffside hikes.

**4. Mt. Hood (60 min)**

Oregon's tallest peak offers year-round adventure. Ski in winter, wildflower hike in summer. Timberline Lodge is a National Historic Landmark and worth the visit alone.

**5. Astoria (90 min)**

Where the Columbia meets the sea. This historic fishing town has a thriving arts scene, great seafood, and was the filming location for The Goonies. The Astoria Column offers panoramic views.

Portland is your launchpad. The Pacific Northwest is your playground.`,
    imagePlaceholder: "/images/daytrip.svg",
    tags: ["Day Trips", "Outdoors", "Wine Country"],
  },
];
