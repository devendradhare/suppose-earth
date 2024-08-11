"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// css
import Styles from "./page.module.css";

const Page = () => {
  const eventData = [
    [
      {
        // date: "January 3, 4",
        year: 2024,
        month: 1,
        date: 3,
        title: "Quadrantids Meteor Shower",
        content:
          "The Quadrantids is an above average shower, with up to 40 meteors per hour at its peak. It is thought to be produced by dust grains left behind by an extinct comet known as 2003 EH1, which was discovered in 2003. The shower runs annually from January 1-5. It peaks this year on the night of the 3rd and morning of the 4th. The waning gibbous moon will block out some of the fainter meteors, but if you are patient this could still be a good show. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Bootes, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "January 11",
        year: 2024,
        month: 1,
        date: 11,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 11:59 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "January 12",
        year: 2024,
        month: 1,
        date: 12,
        title: "Mercury at Greatest Western Elongation",
        content:
          "The planet Mercury reaches greatest western elongation of 23.5 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the morning sky. Look for the planet low in the eastern sky just before sunrise.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "January 25",
        year: 2024,
        month: 1,
        date: 25,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 17:55 UTC. This full moon was known by early Native American tribes as the Wolf Moon because this was the time of year when hungry wolf packs howled outside their camps. This moon has also been know as the Old Moon and the Moon After Yule.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
    ],
    [
      {
        // date: "February 9",
        year: 2024,
        month: 2,
        date: 9,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 23:00 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "February 24",
        year: 2024,
        month: 2,
        date: 24,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 12:32 UTC. This full moon was known by early Native American tribes as the Snow Moon because the heaviest snows usually fell during this time of the year. Since hunting is difficult, this moon has also been known by some tribes as the Hunger Moon, since the harsh weather made hunting difficult.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
    ],
    [
      {
        // date: "March 10",
        year: 2024,
        month: 3,
        date: 10,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 09:02 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "March 20",
        year: 2024,
        month: 3,
        date: 20,
        title: "March Equinox",
        content:
          "The March equinox occurs at 03:01 UTC. The Sun will shine directly on the equator and there will be nearly equal amounts of day and night throughout the world. This is also the first day of spring (vernal equinox) in the Northern Hemisphere and the first day of fall (autumnal equinox) in the Southern Hemisphere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal08.jpg",
      },
      {
        // date: "March 24",
        year: 2024,
        month: 3,
        date: 24,
        title: "Mercury at Greatest Eastern Elongation",
        content:
          "The planet Mercury reaches greatest eastern elongation of 18.7 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the evening sky. Look for the planet low in the western sky just after sunset.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "March 25",
        year: 2024,
        month: 3,
        date: 25,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 07:02 UTC. This full moon was known by early Native American tribes as the Worm Moon because this was the time of year when the ground would begin to soften and the earthworms would reappear. This moon has also been known as the Crow Moon, the Crust Moon, the Sap Moon, and the Lenten Moon.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
      {
        // date: "March 25",
        year: 2024,
        month: 3,
        date: 25,
        title: "Penumbral Lunar Eclipse",
        content:
          "A penumbral lunar eclipse occurs when the Moon passes through the Earth's partial shadow, or penumbra. During this type of eclipse the Moon will darken slightly but not completely. The eclipse will be visible throughout all North America, Mexico, Central America, and South America. (NASA Map and Eclipse Information)",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal03.jpg",
      },
    ],
    [
      {
        // date: "April 8",
        year: 2024,
        month: 4,
        date: 8,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 18:22 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "April 8",
        year: 2024,
        month: 4,
        date: 8,
        title: "Total Solar Eclipse",
        content:
          "A total solar eclipse occurs when the moon completely blocks the Sun, revealing the Sun's beautiful outer atmosphere known as the corona. This is a rare, once-in-a-lifetime event for viewers in the United States. The last total solar eclipse visible in the continental United States occurred in 2017 and the next one will not take place until 2045. The path of totality will begin in the Pacific Ocean and move across parts of Mexico and the eastern United States and Nova Scotia. The total eclipse will be visible in parts of Texas, Arkansas, Missouri, Illinois, Indiana, Kentucky, Ohio, Pennsylvania, New York, Vermont, New Hampshire, and Maine. (NASA Map and Eclipse Information) (NASA Interactive Google Map)",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal04.jpg",
      },
      {
        // date: "April 22, 23",
        year: 2024,
        month: 4,
        date: 22,
        title: "Lyrids Meteor Shower",
        content:
          "The Lyrids is an average shower, usually producing about 20 meteors per hour at its peak. It is produced by dust particles left behind by comet C/1861 G1 Thatcher, which was discovered in 1861. The shower runs annually from April 16-25. It peaks this year on the night of the night of the 22nd and morning of the 23rd. These meteors can sometimes produce bright dust trails that last for several seconds. Unfortunately the glare of the full moon will block out all but the brightest meteors this year. But if you are patient, you may still be able to catch a few good ones. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Lyra, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "April 23",
        year: 2024,
        month: 4,
        date: 23,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 23:50 UTC. This full moon was known by early Native American tribes as the Pink Moon because it marked the appearance of the moss pink, or wild ground phlox, which is one of the first spring flowers. This moon has also been known as the Sprouting Grass Moon, the Growing Moon, and the Egg Moon. Many coastal tribes called it the Fish Moon because this was the time that the shad swam upstream to spawn.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
    ],
    [
      {
        // date: "May 6, 7",
        year: 2024,
        month: 5,
        date: 6,
        title: "Eta Aquarids Meteor Shower",
        content:
          "The Eta Aquarids is an above average shower, capable of producing up to 60 meteors per hour at its peak. Most of the activity is seen in the Southern Hemisphere. In the Northern Hemisphere, the rate can reach about 30 meteors per hour. It is produced by dust particles left behind by comet Halley, which has been observed since ancient times. The shower runs annually from April 19 to May 28. It peaks this year on the night of May 6 and the morning of the May 7. The nearly new moon means dark skies for what should be an excellent show this year. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Aquarius, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "May 8",
        year: 2024,
        month: 5,
        date: 8,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 03:23 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "May 9",
        year: 2024,
        month: 5,
        date: 9,
        title: "Mercury at Greatest Western Elongation",
        content:
          "The planet Mercury reaches greatest western elongation of 26.4 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the morning sky. Look for the planet low in the eastern sky just before sunrise.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "May 23",
        year: 2024,
        month: 5,
        date: 23,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 13:55 UTC. This full moon was known by early Native American tribes as the Flower Moon because this was the time of year when spring flowers appeared in abundance. This moon has also been known as the Corn Planting Moon and the Milk Moon.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
    ],
    [
      {
        // date: "June 6",
        year: 2024,
        month: 6,
        date: 6,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 12:39 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "June 20",
        year: 2024,
        month: 6,
        date: 20,
        title: "June Solstice",
        content:
          "The June solstice occurs at 20:46 UTC. The North Pole of the earth will be tilted toward the Sun, which will have reached its northernmost position in the sky and will be directly over the Tropic of Cancer at 23.44 degrees north latitude. This is the first day of summer (summer solstice) in the Northern Hemisphere and the first day of winter (winter solstice) in the Southern Hemisphere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal08.jpg",
      },
      {
        // date: "June 22",
        year: 2024,
        month: 6,
        date: 22,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 01:09 UTC. This full moon was known by early Native American tribes as the Strawberry Moon because it signaled the time of year to gather ripening fruit. It also coincides with the peak of the strawberry harvesting season. This moon has also been known as the Rose Moon and the Honey Moon.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
    ],
    [
      {
        // date: "July 5",
        year: 2024,
        month: 7,
        date: 5,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 22:59 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "July 21",
        year: 2024,
        month: 7,
        date: 21,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 10:18 UTC. This full moon was known by early Native American tribes as the Buck Moon because the male buck deer would begin to grow their new antlers at this time of year. This moon has also been known as the Thunder Moon and the Hay Moon.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
      {
        // date: "July 22",
        year: 2024,
        month: 7,
        date: 22,
        title: "Mercury at Greatest Eastern Elongation",
        content:
          "The planet Mercury reaches greatest eastern elongation of 26.9 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the evening sky. Look for the planet low in the western sky just after sunset.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "July 28, 29",
        year: 2024,
        month: 7,
        date: 28,
        title: "Delta Aquarids Meteor Shower",
        content:
          "The Delta Aquarids is an average shower that can produce up to 20 meteors per hour at its peak. It is produced by debris left behind by comets Marsden and Kracht. The shower runs annually from July 12 to August 23. It peaks this year on the night of July 28 and morning of July 29. The second quarter moon will block many of the fainter meteors this year. But if you are patient, you should still be able to catch a few good ones. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Aquarius, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
    ],
    [
      {
        // date: "August 4",
        year: 2024,
        month: 8,
        date: 4,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 11:15 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "August 12, 13",
        year: 2024,
        month: 8,
        date: 12,
        title: "Perseids Meteor Shower",
        content:
          "The Perseids is one of the best meteor showers to observe, producing up to 60 meteors per hour at its peak. It is produced by comet Swift-Tuttle, which was discovered in 1862. The Perseids are famous for producing a large number of bright meteors. The shower runs annually from July 17 to August 24. It peaks this year on the night of August 11 and the morning of August 12. The first quarter moon will block out some of the fainter meteors in the early evening. But the Moon will set shortly after midnight leaving dark skies for what could be an excellent early morning show. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Perseus, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "August 19",
        year: 2024,
        month: 8,
        date: 19,
        title: "Full Moon, Blue Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 18:27 UTC. This full moon was known by early Native American tribes as the Sturgeon Moon because the large sturgeon fish of the Great Lakes and other major lakes were more easily caught at this time of year. This moon has also been known as the Green Corn Moon and the Grain Moon. Since this is the third of four full moons in this season, it is known as a blue moon. This rare calendar event only happens once every few years, giving rise to the term, “once in a blue moon.” There are normally only three full moons in each season of the year. But since full moons occur every 29.53 days, occasionally a season will contain 4 full moons. The extra full moon of the season is known as a blue moon. Blue moons occur on average once every 2.7 years.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
    ],
    [
      {
        // date: "September 3",
        year: 2024,
        month: 9,
        date: 3,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 01:57 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "September 5",
        year: 2024,
        month: 9,
        date: 5,
        title: "Mercury at Greatest Western Elongation",
        content:
          "The planet Mercury reaches greatest western elongation of 18.1 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the morning sky. Look for the planet low in the eastern sky just before sunrise.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "September 8",
        year: 2024,
        month: 9,
        date: 8,
        title: "Saturn at Opposition",
        content:
          "The ringed planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun. It will be brighter than any other time of the year and will be visible all night long. This is the best time to view and photograph Saturn and its moons. A medium-sized or larger telescope will allow you to see Saturn's rings and a few of its brightest moons.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "September 18",
        year: 2024,
        month: 9,
        date: 18,
        title: "Full Moon, Supermoon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 02:36 UTC. This full moon was known by early Native American tribes as the Corn Moon because the corn is harvested around this time of year. This moon is also known as the Harvest Moon. The Harvest Moon is the full moon that occurs closest to the September equinox each year. This is also the first of three supermoons for 2024. The Moon will be near its closest approach to the Earth and may look slightly larger and brighter than usual.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
      {
        // date: "September 18",
        year: 2024,
        month: 9,
        date: 18,
        title: "Partial Lunar Eclipse",
        content:
          "A partial lunar eclipse occurs when the Moon passes through the Earth's partial shadow, or penumbra, and only a portion of it passes through the darkest shadow, or umbra. During this type of eclipse a part of the Moon will darken as it moves through the Earth's shadow. The eclipse will be visible throughout most of North America, Mexico, Central America, South America, the Atlantic Ocean, and most of Europe and Africa. (NASA Map and Eclipse Information)",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal03.jpg",
      },
      {
        // date: "September 20",
        year: 2024,
        month: 9,
        date: 20,
        title: "Neptune at Opposition",
        content:
          "The blue giant planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun. It will be brighter than any other time of the year and will be visible all night long. This is the best time to view and photograph Neptune. Due to its extreme distance from Earth, it will only appear as a tiny blue dot in all but the most powerful telescopes.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "September 22",
        year: 2024,
        month: 9,
        date: 22,
        title: "September Equinox",
        content:
          "The September equinox occurs at 12:39 UTC. The Sun will shine directly on the equator and there will be nearly equal amounts of day and night throughout the world. This is also the first day of fall (autumnal equinox) in the Northern Hemisphere and the first day of spring (vernal equinox) in the Southern Hemisphere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal08.jpg",
      },
    ],
    [
      {
        // date: "October 2",
        year: 2024,
        month: 10,
        date: 2,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 18:51 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "October 2",
        year: 2024,
        month: 10,
        date: 2,
        title: "Annular Solar Eclipse",
        content:
          "An annular solar eclipse occurs when the Moon is too far away from the Earth to completely cover the Sun. This results in a ring of light around the darkened Moon. The Sun's corona is not visible during an annular eclipse. The eclipse path will begin in the Pacific Ocean off the coast of South America and move across parts of southern Chile and Argentina. A partial eclipse will be visible throughout most of southern South America. (NASA Map and Eclipse Information) (NASA Interactive Google Map)",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal04.jpg",
      },
      {
        // date: "October 7",
        year: 2024,
        month: 10,
        date: 7,
        title: "Draconids Meteor Shower",
        content:
          "The Draconids is a minor meteor shower producing only about 10 meteors per hour. It is produced by dust grains left behind by comet 21P Giacobini-Zinner, which was first discovered in 1900. The Draconids is an unusual shower in that the best viewing is in the early evening instead of early morning like most other showers. The shower runs annually from October 6-10 and peaks this year on the the night of the 7th. The second quarter moon will ensure dark skies in the early evening for what could be a good show. If you are patient, you may still be able to catch a few good ones. Best viewing will be in the early evening from a dark location far away from city lights. Meteors will radiate from the constellation Draco, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "October 17",
        year: 2024,
        month: 10,
        date: 17,
        title: "Full Moon, Supermoon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 11:28 UTC. This full moon was known by early Native American tribes as the Hunters Moon because at this time of year the leaves are falling and the game is fat and ready to hunt. This moon has also been known as the Travel Moon and the Blood Moon. This is also the second of three supermoons for 2024. The Moon will be near its closest approach to the Earth and may look slightly larger and brighter than usual.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
      {
        // date: "October 21, 22",
        year: 2024,
        month: 10,
        date: 21,
        title: "Orionids Meteor Shower",
        content:
          "The Orionids is an average shower producing up to 20 meteors per hour at its peak. It is produced by dust grains left behind by comet Halley, which has been known and observed since ancient times. The shower runs annually from October 2 to November 7. The shower peaks this year on the night of October 21 and the morning of October 22. The waning gibbous moon will block out most of the fainter meteors this year. But if you are patient, you should still be able to catch a few good ones. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Orion, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
    ],
    [
      {
        // date: "November 1",
        year: 2024,
        month: 11,
        date: 1,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 12:49 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "November 4, 5",
        year: 2024,
        month: 11,
        date: 4,
        title: "Taurids Meteor Shower",
        content:
          "The Taurids is a long-running minor meteor shower producing only about 5-10 meteors per hour. It is unusual in that it consists of two separate streams. The first is produced by dust grains left behind by Asteroid 2004 TG10. The second stream is produced by debris left behind by Comet 2P Encke. The shower runs annually from September 7 to December 10. It peaks this year on the the night of November 4. The first quarter moon will block out all but the brightest meteors this year. If you are patient, you may still be able to catch a few good ones. Best viewing will be just after midnight from a dark location far away from city lights. Meteors will radiate from the constellation Taurus, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "November 15",
        year: 2024,
        month: 11,
        date: 15,
        title: "Full Moon, Supermoon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 21:30 UTC. This full moon was known by early Native American tribes as the Beaver Moon because this was the time of year to set the beaver traps before the swamps and rivers froze. It has also been known as the Frosty Moon and the Dark Moon. This is also the last of three supermoons for 2024. The Moon will be near its closest approach to the Earth and may look slightly larger and brighter than usual.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
      {
        // date: "November 16",
        year: 2024,
        month: 11,
        date: 16,
        title: "Mercury at Greatest Eastern Elongation",
        content:
          "The planet Mercury reaches greatest eastern elongation of 22.5 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the evening sky. Look for the planet low in the western sky just after sunset.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "November 17",
        year: 2024,
        month: 11,
        date: 17,
        title: "Uranus at Opposition",
        content:
          "The blue-green planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun. It will be brighter than any other time of the year and will be visible all night long. This is the best time to view Uranus. Due to its distance, it will only appear as a tiny blue-green dot in all but the most powerful telescopes.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "November 17, 18",
        year: 2024,
        month: 11,
        date: 17,
        title: "Leonids Meteor Shower",
        content:
          "The Leonids is an average shower, producing up to 15 meteors per hour at its peak. This shower is unique in that it has a cyclonic peak about every 33 years where hundreds of meteors per hour can be seen. That last of these occurred in 2001. The Leonids is produced by dust grains left behind by comet Tempel-Tuttle, which was discovered in 1865. The shower runs annually from November 6-30. It peaks this year on the night of the 17th and morning of the 18th. Unfortunately the nearly full moon will block all but the brightest meteors this year. If you are patient, you may still be able to catch a few good ones. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Leo, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
    ],
    [
      {
        // date: "December 1",
        year: 2024,
        month: 12,
        date: 1,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 06:22 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
      {
        // date: "December 7",
        year: 2024,
        month: 12,
        date: 7,
        title: "Jupiter at Opposition",
        content:
          "The giant planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun. It will be brighter than any other time of the year and will be visible all night long. This is the best time to view and photograph Jupiter and its moons. A medium-sized telescope should be able to show you some of the details in Jupiter's cloud bands. A good pair of binoculars should allow you to see Jupiter's four largest moons, appearing as bright dots on either side of the planet.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "December 13, 14",
        year: 2024,
        month: 12,
        date: 13,
        title: "Geminids Meteor Shower",
        content:
          "The Geminids is the king of the meteor showers. It is considered by many to be the best shower in the heavens, producing up to 120 multicolored meteors per hour at its peak. It is produced by debris left behind by an asteroid known as 3200 Phaethon, which was discovered in 1982. The shower runs annually from December 7-17. It peaks this year on the night of the 13th and morning of the 14th. The nearly full moon will block out all but the brightest meteors this year. But if you are patient, you may still be able to catch a few good ones. Best viewing will be from a dark location after midnight. Meteors will radiate from the constellation Gemini, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "December 15",
        year: 2024,
        month: 12,
        date: 15,
        title: "Full Moon",
        content:
          "The Moon will be located on the opposite side of the Earth as the Sun and its face will be will be fully illuminated. This phase occurs at 09:03 UTC. This full moon was known by early Native American tribes as the Cold Moon because this is the time of year when the cold winter air settles in and the nights become long and dark. This moon has also been known as the Long Nights Moon and the Moon Before Yule.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal02.jpg",
      },
      {
        // date: "December 21",
        year: 2024,
        month: 12,
        date: 21,
        title: "December Solstice",
        content:
          "The December solstice occurs at 09:17 UTC. The South Pole of the earth will be tilted toward the Sun, which will have reached its southernmost position in the sky and will be directly over the Tropic of Capricorn at 23.44 degrees south latitude. This is the first day of winter (winter solstice) in the Northern Hemisphere and the first day of summer (summer solstice) in the Southern Hemisphere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal08.jpg",
      },
      {
        // date: "December 21, 22",
        year: 2024,
        month: 12,
        date: 21,
        title: "Ursids Meteor Shower",
        content:
          "The Ursids is a minor meteor shower producing about 5-10 meteors per hour. It is produced by dust grains left behind by comet Tuttle, which was first discovered in 1790. The shower runs annually from December 17-25. It peaks this year on the the night of the 21st and morning of the 22nd. The waning gibbous moon will block out many of the fainter meteors this year. If you are patient, you should still be able to catch some of the brighter ones. Best viewing will be just after midnight from a dark location far away from city lights. Meteors will radiate from the constellation Ursa Minor, but can appear anywhere in the sky.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal09.jpg",
      },
      {
        // date: "December 25",
        year: 2024,
        month: 12,
        date: 25,
        title: "Mercury at Greatest Western Elongation",
        content:
          "The planet Mercury reaches greatest western elongation of 22 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the morning sky. Look for the planet low in the eastern sky just before sunrise.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal05.jpg",
      },
      {
        // date: "December 30",
        year: 2024,
        month: 12,
        date: 30,
        title: "New Moon",
        content:
          "The Moon will located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 22:28 UTC. This is the best time of the month to observe faint objects such as galaxies and star clusters because there is no moonlight to interfere.",
        image: "http://www.seasky.org/astronomy/assets/images/astrocal01.jpg",
      },
    ],
  ];

  // name: "Perseid Meteor Shower",
  // facts:
  //   "The Perseids are one of the most popular meteor showers, known for their bright meteors and high frequency. They originate from the debris of the comet Swift-Tuttle.",
  // whenItHappens: "Annually, typically peaking around August 11-13.",
  // nextOccurrence: "August 2024",

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  console.log("currentMonth:", currentMonth);
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  // console.log("currentYear:", currentYear);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  // console.log("selectedDate:", selectedDate.getDate());
  const [showEventPopup, setShowEventPopup] = useState(false);

  const [events, setEvents] = useState(eventData);
  console.log("events:", events);

  useEffect(() => {
    setEvents(eventData[currentMonth]);
  }, [currentMonth]);

  const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);
  // console.log("dvn:", events);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // console.log("daysInMonth : ", daysInMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  // console.log("firstDayOfMonth : ", firstDayOfMonth);

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    // if (clickedDate >= today || isSameDay(clickedDate, today)) {
    setSelectedDate(clickedDate);
    setShowEventPopup(true);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setEditingEvent(null);
    // }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleEventSubmit = () => {
    const newEvent = {
      id: editingEvent ? editingEvent.id : Date.now(),
      date: selectedDate,
      time: `${eventTime.hours.padStart(2, "0")}:${eventTime.minutes.padStart(
        2,
        "0"
      )}`,
      text: `${eventData[1].content}`,
      title: `${eventData[1].title}`,
    };

    let updatedEvents = [...events];

    if (editingEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editingEvent.id ? newEvent : event
      );
    } else {
      updatedEvents.push(newEvent);
    }

    updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    setEvents(updatedEvents);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setShowEventPopup(false);
    setEditingEvent(null);
  };

  const handleEditEvent = (event) => {
    setSelectedDate(new Date(event.date));
    setEventTime({
      hours: event.time.split(":")[0],
      minutes: event.time.split(":")[1],
    });
    setEventText(event.text);
    setEditingEvent(event);
    setShowEventPopup(true);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);

    setEvents(updatedEvents);
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;

    setEventTime((prevTime) => ({
      ...prevTime,
      [name]: value.padStart(2, "0"),
    }));
  };

  const isEventHere = (day) => {
    const res = eventData[currentMonth % 12].find((ev) => {
      // ev.month === currentMonth + 1 &&
      return ev.year === currentYear && ev.date === day + 1;
    });
    return res;
  };

  return (
    <div className={`bg-[rgb(18,18,18)]`}>
      <h1
        className={`w-full text-center text-5xl text-white/5 font-bold p-5 relative`}
      >
        Astronoy Event Calendar
        <div className="absolute top-1/2 -translate-y-[45%] left-1/2 -translate-x-1/2 text-2xl text-white/80">
          Astronoy Event Calendar
        </div>
      </h1>
      <div className={`${Styles.calendarApp} `}>
        <div className={`${Styles.calendar} p-0`}>
          <div className={`${Styles.navigateDate} m-0`}>
            <h2 className={`${Styles.month}`}>{monthsOfYear[currentMonth]},</h2>
            <h2 className={`${Styles.year}`}>{currentYear}</h2>
            <div className={`${Styles.buttons}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
                onClick={prevMonth}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
                onClick={nextMonth}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className={`${Styles.weekdays}`}>
            {daysOfWeek.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className={`${Styles.days}`}>
            {[...Array(firstDayOfMonth).keys()].map((_, index) => (
              <span key={`empty-${index}`} />
            ))}
            {[...Array(daysInMonth).keys()].map((day) => (
              <span
                key={day + 1}
                className={`
                  ${isEventHere(day) ? Styles.eventDay : ""}
               ${
                 day + 1 === currentDate.getDate() &&
                 currentMonth === currentDate.getMonth() &&
                 currentYear === currentDate.getFullYear()
                   ? Styles.currentDay
                   : Styles.otherDays
               } `}
                // onClick={() => handleDayClick(day + 1)}
              >
                {day + 1}
              </span>
            ))}
          </div>
        </div>
        <div className={`${Styles.events}`}>
          {showEventPopup && (
            <div className={`${Styles.eventPopup}`}>
              <div className={`${Styles.timeInput}`}>
                <div className={`${Styles.eventPopupTime}`}>Time</div>
                <input
                  type="number"
                  name="hours"
                  min={0}
                  max={24}
                  className={`${Styles.hours}`}
                  value={eventTime.hours}
                  onChange={handleTimeChange}
                />
                <input
                  type="number"
                  name="minutes"
                  min={0}
                  max={60}
                  className={`${Styles.minutes}`}
                  value={eventTime.minutes}
                  onChange={handleTimeChange}
                />
              </div>
              <textarea
                placeholder="Enter Event Text (Maximum 60 Characters)"
                value={eventText}
                onChange={(e) => {
                  if (e.target.value.length <= 60) {
                    setEventText(e.target.value);
                  }
                }}
              ></textarea>
              <button
                className={`${Styles.eventPopupBtn}`}
                onClick={handleEventSubmit}
              >
                {editingEvent ? "Update Event" : "Add Event"}
              </button>
              <button
                className={`${Styles.closeEventPopup}`}
                onClick={() => setShowEventPopup(false)}
              >
                {/* <i className="bx bx-x"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="flex justify-between text-white/80">
            <span
              onClick={() => prevMonth()}
              className="btn btn-ghost btn-sm cursor-pointer flex items-center text-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
                <path
                  fill-rule="evenodd"
                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
              Previus month
            </span>
            <div>
              Events in {monthsOfYear[currentMonth]} {currentYear}
            </div>
            <span
              onClick={() => nextMonth()}
              className="btn btn-ghost btn-sm cursor-pointer flex items-center text-white/50"
            >
              Next Month
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="rotate-180"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
                <path
                  fill-rule="evenodd"
                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </span>
          </div>
          {events.map((event, index) => (
            <div
              className={` border-white/15 my-6 flex gap-2 flex-wrap`}
              key={index}
            >
              <div
                className={`${Styles.eventDateWrapper_dvn_del}  w-full flex gap-2`}
              >
                {/* <div className={`${Styles.eventTime_dvn_del} border w-10 h-10`}>{event.time}</div> */}
                <Image
                  className="rounded-md w-14 border object-contain"
                  src={event.image}
                  width={1000}
                  height={1000}
                />
                <div className={`${Styles.eventText_dvn_del} `}>
                  <h2 className="text-2xl text-white/80">{event.title}</h2>
                  <div
                    className={`${Styles.eventDat_e_dvn_del} h-fit text-white/50 text-xs`}
                  >
                    {`${monthsOfYear[event.month - 1]} ${event.date}, ${
                      event.year
                    }`}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className={`${Styles.content} w-full text-white/60 text-sm`}
                >
                  {event.content} <div className="inline-block w-1/3"></div>
                </div>
                <input
                  className={`${Styles.readMoreBtn} px-2 absolute bottom-0 right-0 cursor-pointer text-sm`}
                  type="checkbox"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
