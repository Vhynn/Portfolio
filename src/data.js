const prepath = "https://s3.amazonaws.com/vhyn.dev/images/";

export const tabList = {
  tabs: [
    {
      id: "miniatures",
      title: "Miniatures",
      type: "superTab",
      parentValue: 0,
      a11yProps: 0,
      childTabs: [
        {
          id: "dioramas",
          title: "Dioramas",
          type: "tab",
          parentValue: 0,
          a11yProps: 0,
          dexNum: 0,
          icons: [
            prepath + "dioramas/diorama0.jpg",
            prepath + "dioramas/diorama1.jpg",
            prepath + "dioramas/diorama2.jpg",
          ],
          caption:
            "I'm new to diorama making and haven't completed many yet, but I've got plenty of ideas for future exploration. I appreciate dioramas for their ability to create evocative scenes, and they feel more accessible to me due to the reduced emphasis on intricate sculpting, unlike the fine detail work required for sculpting miniatures. That being said, I still have a strong interest in sculpting miniatures in the future!",
        },
        {
          id: "necrons",
          title: "Necrons",
          type: "tab",
          parentValue: 0,
          a11yProps: 1,
          dexNum: 1,
          icons: [
            prepath + "necrons/necron0.jpg",
            prepath + "necrons/necron1.jpg",
            prepath + "necrons/necron2.jpg",
          ],
          caption:
            "These miniatures belong to a tabletop game called Warhammer 40k, which features silly space armies battling each other. Although I haven't played the game in over ten years, I've remained engaged with the lore and the miniatures since I started. Collecting Necrons has been my primary focus over the years, and it's been enjoyable to gradually amass a larger collection of miniatures that have a cohesive appearance.",
        },
        {
          id: "spaceships",
          title: "Spaceships",
          type: "tab",
          parentValue: 0,
          a11yProps: 2,
          dexNum: 2,
          icons: [
            prepath + "spaceships/spaceship0.jpg",
            prepath + "spaceships/spaceship1.jpg",
            prepath + "spaceships/spaceship2.jpg",
          ],
          caption:
            "This is a collection of painted spaceships intended for the tabletop game Dropfleet Commander. In the future, my goals include painting up another fleet and creating in-scale space terrain such as debris. Additionally, I have an ambitious plan for the future to construct a fully sculpted topographical map and overlay it with clear acrylic, creating a simulated low orbit environment.",
        },
        {
          id: "otherminis",
          title: "Other Miniatures",
          type: "tab",
          parentValue: 0,
          a11yProps: 3,
          dexNum: 3,
          icons: [
            prepath + "otherminis/othermini0.jpg",
            prepath + "otherminis/othermini1.jpg",
            prepath + "otherminis/othermini2.jpg",
          ],
          caption:
            "Unlike my themed galleries, this collection features an eclectic mix of unrelated miniatures that I am most happy with. The motivations behind painting them vary, including practicing techniques, experimenting with less used color palettes, having pieces for board games, or simply finding the sculpts appealing. While some miniatures in this gallery may be related, I didn't think it necessary to create separate galleries for them.",
        },
      ],
    },
    {
      id: "otherprojects",
      title: "Other Projects",
      type: "tab",
      parentValue: 1,
      a11yProps: 1,
      dexNum: 4,
      icons: [
        prepath + "otherprojects/otherproject0.jpg",
        prepath + "otherprojects/otherproject1.jpg",
        "",
      ],
      caption:
        "Here are some art or art-like projects beyond miniatures. I'm currently in the early stages of exploring other mediums, so I don't have much to showcase yet. However, I have a particular interest in prop making and look forward to sharing my work in the near future!",
    },
    {
      id: "photography",
      title: "Photography",
      type: "tab",
      parentValue: 2,
      a11yProps: 2,
      dexNum: 5,
      icons: [
        prepath + "photography/photo0.jpg",
        prepath + "photography/photo1.jpg",
        prepath + "photography/photo2.jpg",
      ],
      caption:
        "Here are a few photos I enjoyed enough to upload. Initially, I purchased a nice camera to capture better pictures of miniatures, but I also had fun experimenting with photography while exploring different settings. Please note that this is just a casual hobby for me, so don't expect anything extraordinary. I mostly take photos for reference purposes.",
    },
  ],
};

export const tabItems = {
  dioramas: {
    description: undefined,
    a11yProps: 0,
    items: [
      {
        id: "desertDemon",
        type: "tabItem",
        title: "Demon In The Desert",
        display: [
          prepath + "dioramas/desertDemon.jpg",
          prepath + "dioramas/desertDemon0.jpg",
        ],
        images: [
          {
            id: "desertDemon1",
            img: prepath + "dioramas/desertDemon1.jpg",
            alt: "Front view of Demon In The Desert",
            caption: <h3>Demon In The Desert</h3>,
          },
          {
            id: "desertDemon2",
            img: prepath + "dioramas/desertDemon2.jpg",
            alt: "Side view of Demon In The Desert",
            caption: <h3>Demon In The Desert</h3>,
          },
          {
            id: "desertDemon3",
            img: prepath + "dioramas/desertDemon3.jpg",
            alt: "Back view of Demon In The Desert",
            caption: <h3>Demon In The Desert</h3>,
          },
          {
            id: "desertDemon4",
            img: prepath + "dioramas/desertDemon4.jpg",
            alt: "Side view of Demon In The Desert",
            caption: <h3>Demon In The Desert</h3>,
          },
          {
            id: "desertDemon5",
            img: prepath + "dioramas/desertDemon5.jpg",
            alt: "Upper view of Demon In The Desert",
            caption: <h3>Demon In The Desert</h3>,
          },
        ],
      },
      {
        id: "gobbridge",
        type: "tabItem",
        title: "Bridge Goblin",
        display: [
          prepath + "dioramas/gobbridge.jpg",
          prepath + "dioramas/gobbridge0.jpg",
        ],
        images: [
          {
            id: "gobbridge1",
            img: prepath + "dioramas/gobbridge1.jpg",
            alt: "Front view of Bridge Goblin",
            caption: <h3>Bridge Goblin</h3>,
          },
          {
            id: "gobbridge2",
            img: prepath + "dioramas/gobbridge2.jpg",
            alt: "Side view of Bridge Goblin",
            caption: <h3>Bridge Goblin</h3>,
          },
          {
            id: "gobbridge3",
            img: prepath + "dioramas/gobbridge3.jpg",
            alt: "Back view of Bridge Goblin",
            caption: <h3>Bridge Goblin</h3>,
          },
          {
            id: "gobbridge4",
            img: prepath + "dioramas/gobbridge4.jpg",
            alt: "Side view of Bridge Goblin",
            caption: <h3>Bridge Goblin</h3>,
          },
          {
            id: "gobbridge5",
            img: prepath + "dioramas/gobbridge5.jpg",
            alt: "Upper view of Bridge Goblin",
            caption: <h3>Bridge Goblin</h3>,
          },
        ],
      },
      {
        id: "shrooms",
        type: "tabItem",
        title: "Mushroom Forest",
        display: [
          prepath + "dioramas/shrooms00.jpg",
          prepath + "dioramas/shrooms.jpg",
        ],
        images: [
          {
            id: "shrooms01",
            img: prepath + "dioramas/shrooms01.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms02",
            img: prepath + "dioramas/shrooms02.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms03",
            img: prepath + "dioramas/shrooms03.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms04",
            img: prepath + "dioramas/shrooms04.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms05",
            img: prepath + "dioramas/shrooms05.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms06",
            img: prepath + "dioramas/shrooms06.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms07",
            img: prepath + "dioramas/shrooms07.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms08",
            img: prepath + "dioramas/shrooms08.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms09",
            img: prepath + "dioramas/shrooms09.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms10",
            img: prepath + "dioramas/shrooms10.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms11",
            img: prepath + "dioramas/shrooms11.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms12",
            img: prepath + "dioramas/shrooms12.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms13",
            img: prepath + "dioramas/shrooms13.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
          {
            id: "shrooms14",
            img: prepath + "dioramas/shrooms14.jpg",
            alt: "",
            caption: <h3>Mushroom Forest</h3>,
          },
        ],
      },
    ],
  },
  necrons: {
    description: undefined,
    a11yProps: 1,
    items: [
      {
        id: "nwarriors",
        type: "tabItem",
        title: "Necron Warriors",
        display: [
          prepath + "necrons/nwarriors.jpg",
          prepath + "necrons/nwarriors00.jpg",
        ],
        images: [
          {
            id: "nwarriors01",
            img: prepath + "necrons/nwarriors01.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors02",
            img: prepath + "necrons/nwarriors02.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors03",
            img: prepath + "necrons/nwarriors03.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors04",
            img: prepath + "necrons/nwarriors04.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors05",
            img: prepath + "necrons/nwarriors05.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors06",
            img: prepath + "necrons/nwarriors06.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors07",
            img: prepath + "necrons/nwarriors07.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors08",
            img: prepath + "necrons/nwarriors08.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors09",
            img: prepath + "necrons/nwarriors09.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors10",
            img: prepath + "necrons/nwarriors10.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors11",
            img: prepath + "necrons/nwarriors11.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors12",
            img: prepath + "necrons/nwarriors12.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
          {
            id: "nwarriors13",
            img: prepath + "necrons/nwarriors13.jpg",
            alt: "",
            caption: <h3>Necron Warriors</h3>,
          },
        ],
      },
      {
        id: "reanim",
        type: "tabItem",
        title: "Necron Reanimator",
        display: [
          prepath + "necrons/reanim.jpg",
          prepath + "necrons/reanim0.jpg",
        ],
        images: [
          {
            id: "reanim1",
            img: prepath + "necrons/reanim1.jpg",
            alt: "",
            caption: <h3>Necron Reanimator</h3>,
          },
          {
            id: "reanim2",
            img: prepath + "necrons/reanim2.jpg",
            alt: "",
            caption: <h3>Necron Reanimator</h3>,
          },
          {
            id: "reanim3",
            img: prepath + "necrons/reanim3.jpg",
            alt: "",
            caption: <h3>Necron Reanimator</h3>,
          },
          {
            id: "reanim4",
            img: prepath + "necrons/reanim4.jpg",
            alt: "",
            caption: <h3>Necron Reanimator</h3>,
          },
        ],
      },
      {
        id: "skorpekh",
        type: "tabItem",
        title: "Necron Skorpekh Destroyers",
        display: [
          prepath + "necrons/skorpekh.jpg",
          prepath + "necrons/skorpekh00.jpg",
        ],
        images: [
          {
            id: "skorpekh01",
            img: prepath + "necrons/skorpekh01.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh02",
            img: prepath + "necrons/skorpekh02.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh03",
            img: prepath + "necrons/skorpekh03.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh04",
            img: prepath + "necrons/skorpekh04.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh05",
            img: prepath + "necrons/skorpekh05.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh06",
            img: prepath + "necrons/skorpekh06.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh07",
            img: prepath + "necrons/skorpekh07.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh08",
            img: prepath + "necrons/skorpekh08.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh09",
            img: prepath + "necrons/skorpekh09.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh10",
            img: prepath + "necrons/skorpekh10.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh11",
            img: prepath + "necrons/skorpekh11.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
          {
            id: "skorpekh12",
            img: prepath + "necrons/skorpekh12.jpg",
            alt: "",
            caption: <h3>Skorpekh Destroyers</h3>,
          },
        ],
      },
      {
        id: "plascyte",
        type: "tabItem",
        title: "Necron Plasmacyte",
        display: [
          prepath + "necrons/plascyte.jpg",
          prepath + "necrons/plascyte0.jpg",
        ],
        images: [
          {
            id: "plascyte4",
            img: prepath + "necrons/plascyte4.jpg",
            alt: "",
            caption: <h3>Necron Plasmacyte</h3>,
          },
          {
            id: "plascyte1",
            img: prepath + "necrons/plascyte1.jpg",
            alt: "",
            caption: <h3>Necron Plasmacyte</h3>,
          },
          {
            id: "plascyte2",
            img: prepath + "necrons/plascyte2.jpg",
            alt: "",
            caption: <h3>Necron Plasmacyte</h3>,
          },
          {
            id: "plascyte3",
            img: prepath + "necrons/plascyte3.jpg",
            alt: "",
            caption: <h3>Necron Plasmacyte</h3>,
          },
        ],
      },
      {
        id: "crythral",
        type: "tabItem",
        title: "Necron Cryptothralls",
        display: [
          prepath + "necrons/crythral.jpg",
          prepath + "necrons/crythral0.jpg",
        ],
        images: [
          {
            id: "crythral1",
            img: prepath + "necrons/crythral1.jpg",
            alt: "",
            caption: <h3>Necron Cryptothralls</h3>,
          },
          {
            id: "crythral2",
            img: prepath + "necrons/crythral2.jpg",
            alt: "",
            caption: <h3>Necron Cryptothralls</h3>,
          },
          {
            id: "crythral3",
            img: prepath + "necrons/crythral3.jpg",
            alt: "",
            caption: <h3>Necron Cryptothralls</h3>,
          },
          {
            id: "crythral4",
            img: prepath + "necrons/crythral4.jpg",
            alt: "",
            caption: <h3>Necron Cryptothralls</h3>,
          },
        ],
      },
      {
        id: "onwarriors",
        type: "tabItem",
        title: "Necron Warriors Old",
        display: [
          prepath + "necrons/onwarriors.jpg",
          prepath + "necrons/onwarriors00.jpg",
        ],
        images: [
          {
            id: "onwarriors01",
            img: prepath + "necrons/onwarriors01.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors02",
            img: prepath + "necrons/onwarriors02.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors03",
            img: prepath + "necrons/onwarriors03.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors04",
            img: prepath + "necrons/onwarriors04.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors05",
            img: prepath + "necrons/onwarriors05.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors06",
            img: prepath + "necrons/onwarriors06.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors07",
            img: prepath + "necrons/onwarriors07.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors08",
            img: prepath + "necrons/onwarriors08.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors09",
            img: prepath + "necrons/onwarriors09.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors10",
            img: prepath + "necrons/onwarriors10.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors11",
            img: prepath + "necrons/onwarriors11.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
          {
            id: "onwarriors12",
            img: prepath + "necrons/onwarriors12.jpg",
            alt: "",
            caption: <h3>Necron Warriors (Old Sculpt)</h3>,
          },
        ],
      },
      {
        id: "trayn",
        type: "tabItem",
        title: "Trazyn The Infinite",
        display: [
          prepath + "necrons/trayn.jpg",
          prepath + "necrons/trayn0.jpg",
        ],
        images: [
          {
            id: "trayn1",
            img: prepath + "necrons/trayn1.jpg",
            alt: "",
            caption: <h3>Trazyn The Infinite</h3>,
          },
          {
            id: "trayn2",
            img: prepath + "necrons/trayn2.jpg",
            alt: "",
            caption: <h3>Trazyn The Infinite</h3>,
          },
          {
            id: "trayn3",
            img: prepath + "necrons/trayn3.jpg",
            alt: "",
            caption: <h3>Trazyn The Infinite</h3>,
          },
          {
            id: "trayn4",
            img: prepath + "necrons/trayn4.jpg",
            alt: "",
            caption: <h3>Trazyn The Infinite</h3>,
          },
        ],
      },
      {
        id: "nmortal",
        type: "tabItem",
        title: "Necron Immortals",
        display: [
          prepath + "necrons/nmortal.jpg",
          prepath + "necrons/nmortal0.jpg",
        ],
        images: [
          {
            id: "nmortal1",
            img: prepath + "necrons/nmortal1.jpg",
            alt: "",
            caption: <h3>Necron Immortals</h3>,
          },
          {
            id: "nmortal2",
            img: prepath + "necrons/nmortal2.jpg",
            alt: "",
            caption: <h3>Necron Immortals</h3>,
          },
          {
            id: "nmortal3",
            img: prepath + "necrons/nmortal3.jpg",
            alt: "",
            caption: <h3>Necron Immortals</h3>,
          },
          {
            id: "nmortal4",
            img: prepath + "necrons/nmortal4.jpg",
            alt: "",
            caption: <h3>Necron Immortals</h3>,
          },
        ],
      },
      {
        id: "nlord",
        type: "tabItem",
        title: "Necron Lord",
        display: [
          prepath + "necrons/nlord.jpg",
          prepath + "necrons/nlord0.jpg",
        ],
        images: [
          {
            id: "nlord1",
            img: prepath + "necrons/nlord1.jpg",
            alt: "",
            caption: <h3>Necron Lord</h3>,
          },
          {
            id: "nlord2",
            img: prepath + "necrons/nlord2.jpg",
            alt: "",
            caption: <h3>Necron Lord</h3>,
          },
          {
            id: "nlord3",
            img: prepath + "necrons/nlord3.jpg",
            alt: "",
            caption: <h3>Necron Lord</h3>,
          },
          {
            id: "nlord4",
            img: prepath + "necrons/nlord4.jpg",
            alt: "",
            caption: <h3>Necron Lord</h3>,
          },
        ],
      },
    ],
  },
  spaceships: {
    description: undefined,
    a11yProps: 2,
    items: [
      {
        id: "sphleetFrig",
        type: "tabItem",
        title: "Sphleet Frigate",
        display: [
          prepath + "spaceships/sphleetFrig.jpg",
          prepath + "spaceships/sphleetFrig0.jpg",
        ],
        images: [
          {
            id: "sphleetFrig1",
            img: prepath + "spaceships/sphleetFrig1.jpg",
            alt: "",
            caption: <h3>Sphleet Frigates</h3>,
          },
          {
            id: "sphleetFrig2",
            img: prepath + "spaceships/sphleetFrig2.jpg",
            alt: "",
            caption: <h3>Sphleet Frigates</h3>,
          },
          {
            id: "sphleetFrig3",
            img: prepath + "spaceships/sphleetFrig3.jpg",
            alt: "",
            caption: <h3>Sphleet Frigates</h3>,
          },
          {
            id: "sphleetFrig4",
            img: prepath + "spaceships/sphleetFrig4.jpg",
            alt: "",
            caption: <h3>Sphleet Frigates</h3>,
          },
        ],
      },
      {
        id: "sphleetDrop",
        type: "tabItem",
        title: "Sphleet Dropship",
        display: [
          prepath + "spaceships/sphleetDrop.jpg",
          prepath + "spaceships/sphleetDrop0.jpg",
        ],
        images: [
          {
            id: "sphleetDrop1",
            img: prepath + "spaceships/sphleetDrop1.jpg",
            alt: "",
            caption: <h3>Sphleet Dropship</h3>,
          },
          {
            id: "sphleetDrop2",
            img: prepath + "spaceships/sphleetDrop2.jpg",
            alt: "",
            caption: <h3>Sphleet Dropship</h3>,
          },
          {
            id: "sphleetDrop3",
            img: prepath + "spaceships/sphleetDrop3.jpg",
            alt: "",
            caption: <h3>Sphleet Dropship</h3>,
          },
          {
            id: "sphleetDrop4",
            img: prepath + "spaceships/sphleetDrop4.jpg",
            alt: "",
            caption: <h3>Sphleet Dropship</h3>,
          },
        ],
      },
      {
        id: "sphleetCorvette",
        type: "tabItem",
        title: "Sphleet Corvette",
        display: [
          prepath + "spaceships/sphleetCorvette.jpg",
          prepath + "spaceships/sphleetCorvette0.jpg",
        ],
        images: [
          {
            id: "sphleetCorvette1",
            img: prepath + "spaceships/sphleetCorvette1.jpg",
            alt: "",
            caption: <h3>Sphleet Corvette</h3>,
          },
          {
            id: "sphleetCorvette2",
            img: prepath + "spaceships/sphleetCorvette2.jpg",
            alt: "",
            caption: <h3>Sphleet Corvette</h3>,
          },
          {
            id: "sphleetCorvette3",
            img: prepath + "spaceships/sphleetCorvette3.jpg",
            alt: "",
            caption: <h3>Sphleet Corvette</h3>,
          },
        ],
      },
      {
        id: "sphleetCruiser",
        type: "tabItem",
        title: "Sphleet Cruiser",
        display: [
          prepath + "spaceships/sphleetCruiser.jpg",
          prepath + "spaceships/sphleetCruiser0.jpg",
        ],
        images: [
          {
            id: "sphleetCruiser1",
            img: prepath + "spaceships/sphleetCruiser1.jpg",
            alt: "",
            caption: <h3>Sphleet Cruiser</h3>,
          },
          {
            id: "sphleetCruiser2",
            img: prepath + "spaceships/sphleetCruiser2.jpg",
            alt: "",
            caption: <h3>Sphleet Cruiser</h3>,
          },
        ],
      },
      {
        id: "sphleetBCruiser",
        type: "tabItem",
        title: "Sphleet Battle Cruiser",
        display: [
          prepath + "spaceships/sphleetBCruiser.jpg",
          prepath + "spaceships/sphleetBCruiser0.jpg",
        ],
        images: [
          {
            id: "sphleetBCruiser1",
            img: prepath + "spaceships/sphleetBCruiser1.jpg",
            alt: "",
            caption: <h3>Sphleet Battle Cruiser</h3>,
          },
          {
            id: "sphleetBCruiser2",
            img: prepath + "spaceships/sphleetBCruiser2.jpg",
            alt: "",
            caption: <h3>Sphleet Battle Cruiser</h3>,
          },
          {
            id: "sphleetBCruiser3",
            img: prepath + "spaceships/sphleetBCruiser3.jpg",
            alt: "",
            caption: <h3>Sphleet Battle Cruiser</h3>,
          },
          {
            id: "sphleetBCruiser4",
            img: prepath + "spaceships/sphleetBCruiser4.jpg",
            alt: "",
            caption: <h3>Sphleet Battle Cruiser</h3>,
          },
        ],
      },
      {
        id: "sphleetLcruiser",
        type: "tabItem",
        title: "Sphleet Light Cruiser",
        display: [
          prepath + "spaceships/sphleetLcruiser.jpg",
          prepath + "spaceships/sphleetLcruiser0.jpg",
        ],
        images: [
          {
            id: "sphleetLcruiser1",
            img: prepath + "spaceships/sphleetLcruiser1.jpg",
            alt: "",
            caption: <h3>Sphleet Light Cruiser</h3>,
          },
          {
            id: "sphleetLcruiser2",
            img: prepath + "spaceships/sphleetLcruiser2.jpg",
            alt: "",
            caption: <h3>Sphleet Light Cruiser</h3>,
          },
          {
            id: "sphleetLcruiser3",
            img: prepath + "spaceships/sphleetLcruiser3.jpg",
            alt: "",
            caption: <h3>Sphleet Light Cruiser</h3>,
          },
        ],
      },
      {
        id: "sphleetBShip",
        type: "tabItem",
        title: "Sphleet Battle Ship",
        display: [
          prepath + "spaceships/sphleetBShip.jpg",
          prepath + "spaceships/sphleetBShip0.jpg",
        ],
        images: [
          {
            id: "sphleetBShip1",
            img: prepath + "spaceships/sphleetBShip1.jpg",
            alt: "",
            caption: <h3>Sphleet Battle Ship</h3>,
          },
          {
            id: "sphleetBShip2",
            img: prepath + "spaceships/sphleetBShip2.jpg",
            alt: "",
            caption: <h3>Sphleet Battle Ship</h3>,
          },
        ],
      },
    ],
  },
  otherminis: {
    description: undefined,
    a11yProps: 3,
    items: [
      {
        id: "nurgthirster",
        type: "tabItem",
        title: "Infected Bloodthirster",
        display: [
          prepath + "otherminis/nurgthirster.jpg",
          prepath + "otherminis/nurgthirster0.jpg",
        ],
        images: [
          {
            id: "nurgthirster1",
            img: prepath + "otherminis/nurgthirster1.jpg",
            alt: "",
            caption: <h3>Infected Bloodthirster</h3>,
          },
          {
            id: "nurgthirster2",
            img: prepath + "otherminis/nurgthirster2.jpg",
            alt: "",
            caption: <h3>Infected Bloodthirster</h3>,
          },
          {
            id: "nurgthirster3",
            img: prepath + "otherminis/nurgthirster3.jpg",
            alt: "",
            caption: <h3>Infected Bloodthirster</h3>,
          },
          {
            id: "nurgthirster4",
            img: prepath + "otherminis/nurgthirster4.jpg",
            alt: "",
            caption: <h3>Infected Bloodthirster</h3>,
          },
        ],
      },
      {
        id: "mimic",
        type: "tabItem",
        title: "Buff Mimic",
        display: [
          prepath + "otherminis/mimic.jpg",
          prepath + "otherminis/mimic0.jpg",
        ],
        images: [
          {
            id: "mimic1",
            img: prepath + "otherminis/mimic1.jpg",
            alt: "",
            caption: <h3>Buff Mimic</h3>,
          },
          {
            id: "mimic2",
            img: prepath + "otherminis/mimic2.jpg",
            alt: "",
            caption: <h3>Buff Mimic</h3>,
          },
          {
            id: "mimic3",
            img: prepath + "otherminis/mimic3.jpg",
            alt: "",
            caption: <h3>Buff Mimic</h3>,
          },
          {
            id: "mimic4",
            img: prepath + "otherminis/mimic4.jpg",
            alt: "",
            caption: <h3>Buff Mimic</h3>,
          },
        ],
      },
      {
        id: "achRun",
        type: "tabItem",
        title: "ACH! RUN!",
        display: [
          prepath + "otherminis/achRun.jpg",
          prepath + "otherminis/achRun0.jpg",
        ],
        images: [
          {
            id: "achRun1",
            img: prepath + "otherminis/achRun1.jpg",
            alt: "",
            caption: <h3>ACH! RUN!</h3>,
          },
          {
            id: "achRun2",
            img: prepath + "otherminis/achRun2.jpg",
            alt: "",
            caption: <h3>ACH! RUN!</h3>,
          },
          {
            id: "achRun3",
            img: prepath + "otherminis/achRun3.jpg",
            alt: "",
            caption: <h3>ACH! RUN!</h3>,
          },
        ],
      },
      {
        id: "nurgle",
        type: "tabItem",
        title: "Lesser Unclean One",
        display: [
          prepath + "otherminis/nurgle.jpg",
          prepath + "otherminis/nurgle0.jpg",
        ],
        images: [
          {
            id: "nurgle1",
            img: prepath + "otherminis/nurgle1.jpg",
            alt: "",
            caption: <h3>Lesser Unclean One</h3>,
          },
          {
            id: "nurgle2",
            img: prepath + "otherminis/nurgle2.jpg",
            alt: "",
            caption: <h3>Lesser Unclean One</h3>,
          },
          {
            id: "nurgle3",
            img: prepath + "otherminis/nurgle3.jpg",
            alt: "",
            caption: <h3>Lesser Unclean One</h3>,
          },
          {
            id: "nurgle4",
            img: prepath + "otherminis/nurgle4.jpg",
            alt: "",
            caption: <h3>Lesser Unclean One</h3>,
          },
        ],
      },
      {
        id: "gobs",
        type: "tabItem",
        title: "Teal Goblins",
        display: [
          prepath + "otherminis/gobs.jpg",
          prepath + "otherminis/gobs0.jpg",
        ],
        images: [
          {
            id: "gobs1",
            img: prepath + "otherminis/gobs1.jpg",
            alt: "",
            caption: <h3>Teal Goblins</h3>,
          },
          {
            id: "gobs2",
            img: prepath + "otherminis/gobs2.jpg",
            alt: "",
            caption: <h3>Teal Goblins</h3>,
          },
          {
            id: "gobs3",
            img: prepath + "otherminis/gobs3.jpg",
            alt: "",
            caption: <h3>Teal Goblins</h3>,
          },
          {
            id: "gobs4",
            img: prepath + "otherminis/gobs4.jpg",
            alt: "",
            caption: <h3>Teal Goblins</h3>,
          },
        ],
      },
      {
        id: "greedGobGod",
        type: "tabItem",
        title: "Goblin Incarnate Of Greed",
        display: [
          prepath + "otherminis/greedGobGod.jpg",
          prepath + "otherminis/greedGobGod0.jpg",
        ],
        images: [
          {
            id: "greedGobGod1",
            img: prepath + "otherminis/greedGobGod1.jpg",
            alt: "",
            caption: <h3>Goblin Incarnate Of Greed</h3>,
          },
          {
            id: "greedGobGod2",
            img: prepath + "otherminis/greedGobGod2.jpg",
            alt: "",
            caption: <h3>Goblin Incarnate Of Greed</h3>,
          },
          {
            id: "greedGobGod3",
            img: prepath + "otherminis/greedGobGod3.jpg",
            alt: "",
            caption: <h3>Goblin Incarnate Of Greed</h3>,
          },
          {
            id: "greedGobGod4",
            img: prepath + "otherminis/greedGobGod4.jpg",
            alt: "",
            caption: <h3>Goblin Incarnate Of Greed</h3>,
          },
        ],
      },
      {
        id: "ratScouts",
        type: "tabItem",
        title: "Red Scouts",
        display: [
          prepath + "otherminis/ratScouts.jpg",
          prepath + "otherminis/ratScouts0.jpg",
        ],
        images: [
          {
            id: "ratScouts1",
            img: prepath + "otherminis/ratScouts1.jpg",
            alt: "",
            caption: <h3>Red Scouts</h3>,
          },
          {
            id: "ratScouts2",
            img: prepath + "otherminis/ratScouts2.jpg",
            alt: "",
            caption: <h3>Red Scouts</h3>,
          },
          {
            id: "ratScouts3",
            img: prepath + "otherminis/ratScouts3.jpg",
            alt: "",
            caption: <h3>Red Scouts</h3>,
          },
        ],
      },
      {
        id: "ratKing",
        type: "tabItem",
        title: "The Red King",
        display: [
          prepath + "otherminis/ratKing.jpg",
          prepath + "otherminis/ratKing0.jpg",
        ],
        images: [
          {
            id: "ratKing1",
            img: prepath + "otherminis/ratKing1.jpg",
            alt: "",
            caption: <h3>The Red King</h3>,
          },
          {
            id: "ratKing2",
            img: prepath + "otherminis/ratKing2.jpg",
            alt: "",
            caption: <h3>The Red King</h3>,
          },
          {
            id: "ratKing3",
            img: prepath + "otherminis/ratKing3.jpg",
            alt: "",
            caption: <h3>The Red King</h3>,
          },
          {
            id: "ratKing4",
            img: prepath + "otherminis/ratKing4.jpg",
            alt: "",
            caption: <h3>The Red King</h3>,
          },
        ],
      },
      {
        id: "ratKnights",
        type: "tabItem",
        title: "Red King's Guard",
        display: [
          prepath + "otherminis/ratKnights.jpg",
          prepath + "otherminis/ratKnights0.jpg",
        ],
        images: [
          {
            id: "ratKnights1",
            img: prepath + "otherminis/ratKnights1.jpg",
            alt: "",
            caption: <h3>Red King's Guard</h3>,
          },
          {
            id: "ratKnights2",
            img: prepath + "otherminis/ratKnights2.jpg",
            alt: "",
            caption: <h3>Red King's Guard</h3>,
          },
          {
            id: "ratKnights3",
            img: prepath + "otherminis/ratKnights3.jpg",
            alt: "",
            caption: <h3>Red King's Guard</h3>,
          },
          {
            id: "ratKnights4",
            img: prepath + "otherminis/ratKnights4.jpg",
            alt: "",
            caption: <h3>Red King's Guard</h3>,
          },
        ],
      },
      {
        id: "ratPriests",
        type: "tabItem",
        title: "Red Brood Zealots",
        display: [
          prepath + "otherminis/ratPriests.jpg",
          prepath + "otherminis/ratPriests0.jpg",
        ],
        images: [
          {
            id: "ratPriests1",
            img: prepath + "otherminis/ratPriests1.jpg",
            alt: "",
            caption: <h3>Red Brood Zealots</h3>,
          },
          {
            id: "ratPriests2",
            img: prepath + "otherminis/ratPriests2.jpg",
            alt: "",
            caption: <h3>Red Brood Zealots</h3>,
          },
          {
            id: "ratPriests3",
            img: prepath + "otherminis/ratPriests3.jpg",
            alt: "",
            caption: <h3>Red Brood Zealots</h3>,
          },
          {
            id: "ratPriests4",
            img: prepath + "otherminis/ratPriests4.jpg",
            alt: "",
            caption: <h3>Red Brood Zealots</h3>,
          },
        ],
      },
    ],
  },
  otherprojects: {
    description: undefined,
    a11yProps: 4,
    items: [
      {
        id: "meFace",
        type: "tabItem",
        title: "Casting Of My Own Face",
        display: [
          prepath + "otherprojects/meFace.jpg",
          prepath + "otherprojects/meFace0.jpg",
        ],
        images: [
          {
            id: "meFace1",
            img: prepath + "otherprojects/meFace1.jpg",
            alt: "",
            caption: <h3>Cast Of My Own Face</h3>,
          },
          {
            id: "meFace2",
            img: prepath + "otherprojects/meFace2.jpg",
            alt: "",
            caption: <h3>Cast Of My Own Face</h3>,
          },
          {
            id: "meFace3",
            img: prepath + "otherprojects/meFace3.jpg",
            alt: "",
            caption: <h3>Cast Of My Own Face</h3>,
          },
          {
            id: "meFace4",
            img: prepath + "otherprojects/meFace4.jpg",
            alt: "",
            caption: <h3>My Face Getting Casted</h3>,
          },
        ],
      },
      {
        id: "reaching",
        type: "tabItem",
        title: "Reaching",
        display: [
          prepath + "otherprojects/reaching.jpg",
          prepath + "otherprojects/reaching0.jpg",
        ],
        images: [
          {
            id: "reaching1",
            img: prepath + "otherprojects/reaching1.jpg",
            alt: "",
            caption: <h3>Rough Sculpture</h3>,
          },
          {
            id: "reaching2",
            img: prepath + "otherprojects/reaching2.jpg",
            alt: "",
            caption: <h3>Rough Sculpture</h3>,
          },
          {
            id: "reaching3",
            img: prepath + "otherprojects/reaching3.jpg",
            alt: "",
            caption: <h3>Rough Sculpture</h3>,
          },
          {
            id: "reaching4",
            img: prepath + "otherprojects/reaching4.jpg",
            alt: "",
            caption: <h3>Rough Sculpture</h3>,
          },
        ],
      },
    ],
  },
  photography: {
    description: undefined,
    a11yProps: 5,
    items: [
      {
        id: "wildFlower",
        type: "tabItem",
        title: "Wild Flowers",
        display: [
          prepath + "photography/wildFlower.jpg",
          prepath + "photography/wildFlower0.jpg",
        ],
        images: [
          {
            id: "wildFlower1",
            img: prepath + "photography/wildFlower1.jpg",
            alt: "",
            caption: <h3>Wild Flowers</h3>,
          },
          {
            id: "wildFlower2",
            img: prepath + "photography/wildFlower2.jpg",
            alt: "",
            caption: <h3>Wild Flowers</h3>,
          },
          {
            id: "wildFlower3",
            img: prepath + "photography/wildFlower3.jpg",
            alt: "",
            caption: <h3>Wild Flowers</h3>,
          },
          {
            id: "wildFlower4",
            img: prepath + "photography/wildFlower4.jpg",
            alt: "",
            caption: <h3>Wild Flowers</h3>,
          },
        ],
      },
      {
        id: "hBird",
        type: "tabItem",
        title: "Humming Birds",
        display: [
          prepath + "photography/hBird.jpg",
          prepath + "photography/hBird0.jpg",
        ],
        images: [
          {
            id: "hBird1",
            img: prepath + "photography/hBird1.jpg",
            alt: "",
            caption: <h3>Humming Birds</h3>,
          },
          {
            id: "hBird2",
            img: prepath + "photography/hBird2.jpg",
            alt: "",
            caption: <h3>Humming Birds</h3>,
          },
        ],
      },
      {
        id: "texField",
        type: "tabItem",
        title: "Texas Fields",
        display: [
          prepath + "photography/texField.jpg",
          prepath + "photography/texField0.jpg",
        ],
        images: [
          {
            id: "texField1",
            img: prepath + "photography/texField1.jpg",
            alt: "",
            caption: <h3>A Field In Texas</h3>,
          },
          {
            id: "texField2",
            img: prepath + "photography/texField2.jpg",
            alt: "",
            caption: <h3>A Field In Texas</h3>,
          },
        ],
      },
    ],
  },
};