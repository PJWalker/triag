/* eslint-disable no-undef */
const TA = {};

TA.ASCII = `

████████╗ █████╗
╚══██╔══╝██╔══██╗
   ██║   ███████║
   ██║   ██╔══██║
   ██║   ██║  ██║
   ╚═╝   ╚═╝  ╚═╝

`;

TA.chatModifyTimeout = 10 * 60 * 1000; // 10 minutes

TA.aspects = {
  anomaly: {
    colorClass: "color-blue",
  },
  reality: {
    colorClass: "color-yellow",
  },
  competency: {
    colorClass: "color-red",
  },
};

TA.qualities = [
  "attentiveness",
  "duplicity",
  "dynamism",
  "empathy",
  "initiative",
  "persistence",
  "presence",
  "professionalism",
  "subtlety",
];

TA.agencyRanks = {
  trainee: {
    name: "TA.Agency.Rank.trainee",
    order: 0,
  },
  associate: {
    name: "TA.Agency.Rank.associate",
    order: 3,
  },
  snrassociate: {
    name: "TA.Agency.Rank.snrassociate",
    order: 6,
  },
  asstdirector: {
    name: "TA.Agency.Rank.asstdirector",
    order: 9,
  },
  director: {
    name: "TA.Agency.Rank.director",
    order: 12,
  },
  rgndirector: {
    name: "TA.Agency.Rank.rgndirector",
    order: 15,
  },
  vp: {
    name: "TA.Agency.Rank.vp",
    order: 18,
  },
  snrvp: {
    name: "TA.Agency.Rank.snrvp",
    order: 21,
  },
  execvp: {
    name: "TA.Agency.Rank.execvp",
    order: 24,
  },
  chair: {
    name: "TA.Agency.Rank.chair",
    order: 27,
  },
};

((TA.outcomes = {
  success: {
    name: "TA.Outcome.success.prefix",
    image: "onsuccess.svg",
    order: 1,
  },
  spend3s: {
    name: "TA.Outcome.spend3s.prefix",
    image: "onbonus.svg",
    order: 2,
  },
  eachplus3: {
    name: "TA.Outcome.eachplus3.prefix",
    image: "onbonus.svg",
    order: 3,
  },
  triscendence: {
    name: "TA.Outcome.triscendence.prefix",
    image: "onbonus.svg",
    order: 6,
  },
  every3rd3: {
    name: "TA.Outcome.every3rd3.prefix",
    image: "onbonus.svg",
    order: 7,
  },
  sixplus3s: {
    name: "TA.Outcome.sixplus3s.prefix",
    image: "onbonus.svg",
    order: 8,
  },
  failure: {
    name: "TA.Outcome.failure.prefix",
    image: "onfailure.svg",
    order: 9,
  },
}),
  (TA.templates = {
    track: {
      id: "",
      reference: "",
      name: "",
      description: "",
      size: 0,
      value: 0,
      strikes: 0,
      milestones: {},
    },
  }));

((TA.playwallLists = {
  aspects: {
    undefined: "TA.Unconnected",
    anomaly: "TYPES.Item.Anomaly",
    reality: "TYPES.Item.Reality",
    competency: "TYPES.Item.Competency",
    agency: "TA.TheAgency",
  },
}),
  (TA.playwall = {
    anomaly: {
      worklife: {
        1: "H4",
        2: "H3",
        5: "U2",
        7: "X2",
        11: "N1",
        13: "Q2",
        17: "L10",
        19: "G8",
        23: "A7",
      },
    },
    reality: {
      worklife: {
        1: "C4",
        4: "L11",
        8: "E2",
        10: "O4",
        14: "T6",
        16: "V2",
        20: "X3",
        22: "H5",
        26: "E3",
      },
    },
    competency: {
      worklife: {
        3: "A3",
        6: "D4",
        9: "G3",
        12: "J3",
        15: "N3",
        18: "Q3",
        21: "T3",
        24: "W8",
        27: "Y2",
      },
    },
  }));

TA.unraveling = {
  looseEnds: {
    0: {
      chaos: 0,
      weather: 0,
    },
    11: {
      chaos: 5,
      weather: 1,
    },
    22: {
      chaos: 10,
      weather: 2,
    },
    33: {
      chaos: 15,
      weather: 3,
    },
    44: {
      chaos: 20,
      weather: 4,
    },
    55: {
      chaos: 25,
      weather: 5,
    },
    66: {
      chaos: 0,
      weather: 0,
    },
    77: {
      chaos: 0,
      weather: 0,
    },
  },
};

function registerSettings() {
  game.settings.register("triangleagency", "systemMigrationVersion", {
    default: "",
    scope: "world",
    type: String,
    config: false,
  });

  game.settings.register("triangleagency", "chaos", {
    name: game.i18n.localize("TA.chaos"),
    default: 0,
    scope: "world",
    type: Number,
    config: false,
  });

  game.settings.register("triangleagency", "burnout", {
    name: game.i18n.localize("TA.burnout"),
    default: 0,
    scope: "world",
    type: Number,
    config: false,
  });

  game.settings.register("triangleagency", "looseends", {
    name: game.i18n.localize("TA.looseends"),
    default: 0,
    scope: "world",
    type: Number,
    config: false,
  });

  game.settings.register("triangleagency", "playwall", {
    name: game.i18n.localize("TA.Playwall"),
    default: null,
    scope: "world",
    type: String,
    config: false,
  });

  game.settings.register("triangleagency", "gmscreen", {
    name: game.i18n.localize("TA.GMScreen"),
    default: null,
    scope: "world",
    type: Object,
    config: false,
  });

  game.settings.register("triangleagency", "manualStanding", {
    name: game.i18n.localize("TA.Setting.ManualStanding"),
    hint: game.i18n.localize("TA.Setting.ManualStandingHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    requiresReload: true,
  });

  game.settings.register("triangleagency", "playerExtra", {
    name: game.i18n.localize("TA.Setting.PlayerExtra"),
    hint: game.i18n.localize("TA.Setting.PlayerExtraHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    requiresReload: true,
  });

  game.settings.register("triangleagency", "playerExtraPlaywall", {
    name: game.i18n.localize("TA.Setting.PlayerExtraPlaywall"),
    hint: game.i18n.localize("TA.Setting.PlayerExtraPlaywallHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    requiresReload: true,
  });

  game.settings.register("triangleagency", "sceneBurnout", {
    name: game.i18n.localize("TA.Setting.SceneBurnout"),
    hint: game.i18n.localize("TA.Setting.SceneBurnoutHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    requiresReload: true,
  });

  game.settings.register("triangleagency", "autoATABurnout", {
    name: game.i18n.localize("TA.Setting.autoATABurnout"),
    hint: game.i18n.localize("TA.Setting.autoATABurnoutHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    requiresReload: true,
  });

  game.settings.register("triangleagency", "weather", {
    name: game.i18n.localize("TA.Setting.ManualStanding"),
    default: { current: {}, history: {} },
    scope: "world",
    type: Object,
    config: false,
  });
}

class taDice {
  // Roll 6d4 and return the result as a true/false array
  static roll(dice = 6, faces = 4) {
    const result = {
      dice: [],
      triscendence: false,
    };

    result.success = 0;
    for (let i = 1; i <= dice; i++) {
      const pip = Math.floor(foundry.dice.MersenneTwister.random() * faces) + 1;
      if (pip === 3) result.success += 1;
      result.dice.push(pip === 3);
    }
    result.triscendence = result.success === 3;
    result.failure = 6 - result.success;

    return result;
  }

  static rollSet(count, faces) {
    const result = {
      roll: [],
      success: 0,
    };
    for (let i = 1; i <= count; i++) {
      const pip = Math.floor(foundry.dice.MersenneTwister.random() * faces) + 1;
      result.roll.push(pip);
      result.success += pip % 3 === 0 ? pip / 3 : 0;
    }
    return result;
  }

  static rollGroup(primary, supplement) {
    const result = {
      primary: {
        type: primary,
        result: {},
      },
      supplement: {
        active: supplement ? true : false,
        type: supplement,
        result: {},
      },
    };

    switch (primary) {
      case "d4":
        result.primary.result = this.rollSet(6, 4);
        break;
      case "d10":
        result.primary.result = this.rollSet(1, 10);
        break;
      case "d20":
        result.primary.result = this.rollSet(1, 20);
        break;
    }

    if (result.supplement.active) {
      switch (supplement) {
        case "d6":
          result.supplement.result = this.rollSet(1, 6);
          break;
      }
    }

    if (game.dice3d) {
      const data = { throws: [{ dice: [] }] };
      const throws = data.throws[0].dice;
      result.primary.result.roll.forEach((pips) => {
        throws.push({
          result: pips,
          resultLabel: pips,
          type: primary,
          vectors: [],
          options: {},
        });
      });
      if (result.supplement.active && result.supplement.result) {
        throws.push({
          result: result.supplement.result.roll[0],
          resultLabel: result.supplement.result.roll[0],
          type: supplement,
          vectors: [],
          options: {},
        });
      }
      game.dice3d.show(data);
    }

    return result;
  }

  static rollD4({
    actor,
    quality,
    supplement = undefined,
    burnout = 0,
    action = "",
    message = "",
    ability = null,
  }) {
    const pool = this.rollGroup("d4", supplement);

    const success = [];
    const other = [];
    for (let i = 0; i < 6; i++) {
      const roll = pool.primary.result.roll[i];
      if (roll == 3) {
        success.push(roll);
      } else {
        other.push(roll);
      }
    }
    pool.primary.result.roll = success.concat(other);

    pool.message = message;
    pool.qa = {
      max: quality.value,
      active: quality.value > 0,
      spent: 0,
      up: 0,
      down: 0,
    };
    pool.demerit = {
      max: actor.system.agency.demerits,
      active: actor.system.agency.demerits >= 3,
      spent: 0,
      up: 0,
      down: 0,
    };

    this.analyzeD4(pool.primary.result);
    pool.burnout = burnout;
    pool.primary.result.quality = quality;
    pool.lock = false;
    pool.action = action;
    pool.canUnl3ash = true;
    pool.unl3ash = false;

    if (pool.supplement.active && pool.supplement.type === "d6") {
      this.analyzeD6(pool.supplement.result);
    }

    const supplementSuccess = pool.supplement.active
      ? pool.supplement.result.success
      : 0;
    // check for Triscendence
    if (
      pool.primary.result.success === 3 ||
      pool.primary.result.success + supplementSuccess === 3 ||
      pool.primary.result.success - supplementSuccess === 3
    ) {
      pool.primary.result.triscendence = true;
      pool.primary.result.success = 3;
      pool.primary.result.message = game.i18n.localize(
        "TA.Agent.TricendenceOptions",
      );
      pool.lock = true;
      pool.supplement.active = false;
    }

    // check for Unl3ash
    if (
      (pool.supplement.active &&
        pool.supplement.type === "d6" &&
        pool.primary.result.success + supplementSuccess === 7) ||
      pool.primary.result.success - supplementSuccess === 7
    ) {
      pool.primary.result.unleash = true;
      pool.unleash = true;
      pool.primary.result.success = 7;
      pool.primary.result.message =
        '<div class="isagency center">' +
        game.i18n.localize("TA.UNL3ASH") +
        "</div>" +
        game.ta.helpers.taHelper.enhanceText(
          game.i18n.localize("TA.Chat.UNL3ASH"),
        );
      pool.lock = true;
      pool.supplement.active = false;
      pool.burnout = 0;
      pool.primary.result.chaos = 0;
    }

    // check for result with no options and auto-lock
    if (!pool.qa.active && !pool.lock) {
      pool.lock = true;
      let chaos = pool.primary.result.chaos + pool.burnout;
      if (pool.supplement.active) {
        chaos += pool.supplement.chaos;
      }
      if (
        pool.supplement.active &&
        pool.supplement.type === "d6" &&
        pool.demerit.active
      ) {
        pool.lock = false;
      }

      if (pool.action === "ata" && game.ta.settings.autoATABurnout) {
        let effective =
          pool.primary.result.success + supplementSuccess - pool.burnout;
        if (effective <= 0) {
          let burnout =
            Number(game.settings.get("triangleagency", "burnout")) + 1;
          if (game.user !== game.users.activeGM) {
            game.system.socketHandler.emit("setBurnout", burnout);
          } else {
            game.ta.applications.agencyOs.setBurnout(burnout);
          }
        }
      }

      if (chaos > 0) {
        chaos += Number(game.settings.get("triangleagency", "chaos"));
        if (game.user !== game.users.activeGM) {
          game.system.socketHandler.emit("setChaos", chaos);
        } else {
          game.ta.applications.agencyOs.setChaos(chaos);
        }
      }
    }

    const template = "systems/triangleagency/templates/part-d4-outcome.hbs";

    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: ChatMessage.getSpeaker({ actor: actor }),
      flags: {
        ta: {
          dice: "d4",
          outcome: pool,
          template: template,
          ability: {
            outcomes: ability ? Object.keys(ability.system.outcomes) : null,
          },
        },
      },
    });
  }

  static rollD10({
    actor,
    quality,
    supplement = undefined,
    burnout = 0,
    message = "",
    ability = null,
  }) {
    const pool = this.rollGroup("d10", supplement);
    pool.message = message;
    pool.qa = {
      max: quality.value,
      active: quality.value > 0,
      spent: 0,
      up: 0,
      down: 0,
    };
    pool.demerit = {
      max: actor.system.agency.demerits,
      active: actor.system.agency.demerits >= 3,
      spent: 0,
      up: 0,
      down: 0,
    };

    this.analyzeD10(pool.primary.result);
    pool.burnout = burnout;
    pool.primary.result.quality = quality;
    pool.primary.result.pip = pool.primary.result.roll[0];
    pool.canUnl3ash = true;
    pool.unl3ash = false;
    pool.lock = false;

    if (pool.supplement.active) {
      this.analyzeD6(pool.supplement.result);
    }

    if (pool.primary.result.autofail) {
      // automatic fail
      pool.lock = true;
      pool.primary.result.message = game.i18n.localize("TA.Chat.D10FailOn3");
      const chaos =
        Number(game.settings.get("triangleagency", "chaos")) +
        pool.primary.result.chaos +
        pool.burnout +
        (pool.supplement.active ? pool.supplement.result.chaos : 0);
      if (game.user !== game.users.activeGM) {
        game.system.socketHandler.emit("setChaos", chaos);
      } else {
        game.ta.applications.agencyOs.setChaos(chaos);
      }
    } else if (
      pool.primary.result.pip +
        (pool.supplement.active ? pool.supplement.result.pip : 0) ==
      7
    ) {
      // UNL3ASH
      pool.lock = true;
      pool.unl3ash = true;
      pool.primary.result.message =
        '<div class="isagency center">' +
        game.i18n.localize("TA.UNL3ASH") +
        "</div><div>" +
        game.ta.helpers.taHelper.enhanceText(
          game.i18n.localize("TA.Chat.UNL3ASH"),
        ) +
        "</div>";

      const chaos =
        Number(game.settings.get("triangleagency", "chaos")) +
        pool.primary.result.chaos +
        pool.burnout +
        (pool.supplement.active ? pool.supplement.result.chaos : 0);
      if (game.user !== game.users.activeGM) {
        game.system.socketHandler.emit("setChaos", chaos);
      } else {
        game.ta.applications.agencyOs.setChaos(chaos);
      }
    } else if (!pool.qa.active && !pool.demerit.active && !pool.lock) {
      // check for result with no options and auto-lock
      pool.lock = true;
    }

    const template = "systems/triangleagency/templates/part-d10-outcome.hbs";

    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: ChatMessage.getSpeaker({ actor: actor }),
      flags: {
        ta: {
          dice: "d10",
          outcome: pool,
          template: template,
          ability: {
            outcomes: Object.keys(ability.system.outcomes),
          },
        },
      },
    });
  }

  static async rollD20({ actor, supplement = null }) {
    const qas = actor.system.qa;
    const context = {};

    context.allQAs = Object.keys(qas)
      .map((qa) => {
        return {
          qa: qa,
          name: game.i18n.localize("TA.Quality." + qa),
          value: qas[qa].value,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    context.payWith = context.allQAs.filter((qa) => qa.value > 0);

    let template = "systems/triangleagency/templates/dialog-d20-options.hbs";
    const part = await foundry.applications.handlebars.renderTemplate(
      template,
      context,
    );
    let riskQA = null;

    await foundry.applications.api.DialogV2.wait({
      window: { title: game.i18n.localize("TA.Dialog.Notification") },
      modal: true,
      rejectClose: false,
      content: part,
      buttons: [
        {
          action: "go",
          label: game.i18n.localize("TA.Action.Okay"),
          default: true,
          callback: (event, button) => {
            const payFrom = button.form.elements.payFrom.value;
            riskQA = button.form.elements.riskQA.value;

            // decrement the QA used to pay for the action
            const update = {};
            update["system.qa." + payFrom + ".value"] =
              actor.system.qa[payFrom].value - 1;
            actor.update(update);
          },
        },
        {
          action: "exit",
          label: game.i18n.localize("TA.Action.Cancel"),
        },
      ],
    });

    if (riskQA == null) {
      return;
    }

    const pool = this.rollGroup("d20", supplement);
    pool.primary.result.quality = riskQA;
    pool.primary.result.pip = pool.primary.result.roll[0];
    pool.primary.result.boost = Number(actor.system.qa[riskQA].value);

    this.analyzeD20(pool.primary.result);

    if (pool.primary.result.autofail) {
      const update = {};
      update["system.qa." + riskQA + ".value"] = 0;
      actor.update(update);
    }

    template = "systems/triangleagency/templates/part-d20-outcome.hbs";
    let msg =
      "<span>" +
      game.i18n.localize("TA.Agent.SkillCheckMsg") +
      "</span>" +
      (await foundry.applications.handlebars.renderTemplate(template, pool));

    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: ChatMessage.getSpeaker({ actor: actor }),
      flags: {
        ta: {
          //title: "",
          dice: "d20",
          outcome: pool,
          message: msg,
        },
      },
    });

    if (pool.primary.result.chaos > 0) {
      const chaos =
        Number(game.settings.get("triangleagency", "chaos")) +
        pool.primary.result.chaos;
      if (game.user !== game.users.activeGM) {
        game.system.socketHandler.emit("setChaos", chaos);
      } else {
        game.ta.applications.agencyOs.setChaos(chaos);
      }
    }
  }

  static analyzeD4(result) {
    result.isfailure = result.success == 0;
    result.triscendence = result.success == 3;
    result.chaos = result.triscendence ? 0 : 6 - result.success;
    result.message = "";

    result.adjust = {
      qa: 1,
      demerit: 0,
      step: 1,
      setface: false,
    };
  }

  static analyzeD6(result) {
    result.pip = result.roll[0];
    result.success = result.pip % 3 == 0 ? result.pip / 3 : 0;
    result.isfailure = result.success == 0;
    result.chaos = result.isfailure ? 1 : 0;
    result.message = "";

    result.adjust = {
      qa: 1,
      demerit: 3,
      step: 0,
      setface: true,
    };
  }

  static analyzeD10(result) {
    result.pip = result.roll[0];
    result.success = result.pip == 3 ? 0 : Number(result.pip);
    result.triscendence = false;
    result.isfailure = result.pip == 3;
    result.autofail = result.pip == 3;
    result.chaos = Number(result.pip);

    result.adjust = {
      qa: 1,
      demerit: 3,
      step: 1,
      setface: false,
    };
  }

  static analyzeD20(result) {
    result.pip = result.roll[0];

    result.triscendence = result.pip == 3;
    result.autofail = result.pip == 7;
    result.success =
      (result.triscendence || result.pip + result.boost > 10) &&
      !result.autofail
        ? 1
        : 0;
    result.isfailure = result.autofail || result.success == 0;
    result.chaos = result.isfailure ? result.pip : 0;

    result.message = result.success
      ? game.i18n.localize("TA.D20.Success")
      : game.i18n.localize("TA.D20.Failure").replace("[chaos]", result.chaos);
  }
}

//Extend the base JournalEntry Class
class taJournalEntry extends JournalEntry {
  /** @override */
  prepareData() {
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {}

  /** @override */
  prepareDerivedData() {
    const journal = this;
    journal.pages;
  }

  async _prepareCommonData() {}

  addPlaywall(code, name) {
    return this.createEmbeddedDocuments("JournalEntryPage", [
      {
        name: name,
        type: "Playwall",
        text: "",
        title: {
          level: 1,
        },
        editable: false,
        ownership: {
          default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER,
        },
        flags: {
          ta: {
            nextCode: "",
            gmnotes: "",
            abilities: {},
            requisitions: {},
            tracks: {},
          },
        },
      },
    ]);

    /*
    result.update({
      "system.aspect": "undefined"
    });
    */
  }
}

const taHelper = {};

taHelper.addPlaywall = async (actorId, playwall, context, extras) => {
  //if (game.user.isGM) {
  const actor = await game.actors.get(actorId);
  if (actor) {
    actor.addPlaywall(playwall, context, extras);
  }
  /*}
  else {
    const data = {
      actorId: actorId,
      playwall: playwall,
      context: context,
      extras: extras
    }
    game.system.socketHandler.emit("addPlaywall", data);
  }
  */
};

taHelper.removePlaywall = async (actorId, playwall) => {
  //if (game.user.isGM) {
  const actor = await game.actors.get(actorId);
  if (actor) {
    actor.removePlaywall(playwall);
  }
  /*}
  else {
    const data = {
      actorId: actorId,
      playwall: playwall
    }
    game.system.socketHandler.emit("removePlaywall", data);
  }
  */
};

taHelper.setObjectPermissions = (type, id, player, value) => {
  if (game.user.isGM) {
    const update = {};
    update["ownership." + (value ? "" : "-=") + player] = value;
    switch (type) {
      case "Page": {
        //console.log(update)
        break;
      }
      case "Actor": {
        const actor = game.actors.get(id);
        if (actor) {
          actor.update(update);
          //console.log(update)
        }
        break;
      }
    }
    return;
  } else {
    const data = {
      type: type,
      id: id,
      player: player,
      value: value,
    };
    game.system.socketHandler.emit("setObjectPermissions", data);
  }
};

taHelper.enhanceText = (text, quality = null, qas = {}, data = {}) => {
  if (quality) {
    text = text.replaceAll("[quality]", "[" + quality + "]");
  }
  if (CONFIG.TA.qualities.some((quality) => text.includes(quality))) {
    CONFIG.TA.qualities.forEach((quality) => {
      const tag = "[" + quality + "]";

      if (Object.keys(data).length > 0) {
        let triggerData = "";
        data["data-qa"] = quality;
        Object.keys(data).forEach((key) => {
          triggerData += key + '="' + data[key] + '" ';
        });

        let highlight = qas[quality].value == 0 ? "burntout" : "";
        text = text.replaceAll(
          tag,
          '<span class="articulat-bold qa-check ' +
            highlight +
            '" ' +
            triggerData +
            ">" +
            game.i18n.localize("TA.Quality." + quality) +
            "</span>",
        );
      } else {
        text = text.replaceAll(
          tag,
          '<span class="articulat-bold">' +
            game.i18n.localize("TA.Quality." + quality) +
            "</span>",
        );
      }
    });
  }

  return text;
};

/************************************************************************
 * Reduces the form buttons to icons. Optionally adds a Lock button
 ************************************************************************/
taHelper.adjustHeaderButtons = (html, addLock, sheet) => {
  const header = html[0].querySelector(".window-header");

  /*
  header.querySelectorAll(".document-id-link").forEach(btn => {
    btn.remove();
  });
  */

  header.querySelectorAll(".header-button").forEach((btn) => {
    if (btn.classList.contains("configure-sheet")) {
      btn.remove();
      return;
    }
    const label = btn.querySelector(":scope > i").nextSibling;
    btn.dataset.tooltip = label.textContent;
    btn.setAttribute("aria-label", label.textContent);
    label.remove();
  });

  if (addLock) {
    const parser = new DOMParser();
    let edit =
      '<a class="control toggle-edit-sheet" data-tooltip="' +
      (sheet.actor.system.lock
        ? game.i18n.localize("TA.Edit")
        : game.i18n.localize("TA.Lock")) +
      '"><i id="toggle-edit-status" class="fas fa-lock' +
      (sheet.actor.system.lock ? "" : "-open") +
      '"></i></a>';
    edit = parser.parseFromString(edit, "text/html").body.firstChild;
    edit.addEventListener("click", sheet._listenSheetEditToggle.bind(sheet));
    edit.addEventListener("dblclick", (event) => event.stopPropagation());
    const firstButton = header.querySelector(".header-button");
    firstButton?.insertAdjacentElement("beforebegin", edit);
  }
};

/************************************************************************
 * preps and optionally renders a track
 ************************************************************************/
taHelper.renderTrack = ({
  track,
  columns = 8,
  canstrike = false,
  connectors = true,
  startIcon = null,
  endIcon = null,
  showMilestoneContent = false,
  render = false,
  canaction = false,
  renderOptions = {},
}) => {
  if (game.ta.settings.playerPlaywallTracks) {
    canaction =
      canaction || ["worklife", "peerreview"].includes(renderOptions.boxClass);
  }

  const trackData = {
    columns: track.size,
    canstrike: canstrike,
    rows: [],
  };

  columns = track.size;

  const loops = Math.ceil(track.size / columns);
  const value = track.value || 0;
  const strikes = track.strikes || 0;
  const milestones = track.milestones || {};
  let remaining = track.size;

  for (let row = 1; row <= loops; row++) {
    const newRow = {
      rowStart: "&nbsp;",
      rowEnd: "&nbsp;",
      rowStartArrowDown: false,
      rowEndArrowDown: false,
      columns: [],
    };
    const reverse = row % 2 == 0;

    let colStart = (row - 1) * columns + 1;
    let colEnd = (row - 1) * columns + (row < loops ? columns : remaining);
    let colAdj = 1;

    if (reverse) {
      const wrk = colStart;
      colStart = colEnd;
      colEnd = wrk;
      colAdj = -1;
    }

    newRow["rowStart"] =
      row == 1
        ? startIcon || "&nbsp;"
        : reverse && row < loops
          ? "&#9484;&#9472;"
          : "&nbsp;";

    newRow["rowStart"] = "&nbsp;";
    if (row == 1) {
      newRow["rowStart"] = startIcon || "&nbsp;";
    } else if (row < loops) {
      if (reverse) {
        newRow["rowStart"] = "&#9484;&#9472;";
        newRow["rowStartArrowDown"] = true;
      } else {
        newRow["rowStart"] = "&#9492;&#9472;";
      }
    } else if (row == loops && !reverse) {
      newRow["rowStart"] = "&#9492;&#9472;";
    }

    if (reverse) {
      newRow["rowEnd"] = "&#9496;"; // reverse always has a connector and a down arrow
    } else {
      if (row < loops) {
        newRow["rowEnd"] = "&#9488;";
        newRow["rowEndArrowDown"] = true;
      } else if (row == loops && endIcon) {
        newRow["rowEnd"] = endIcon;
      }
    }

    for (
      let col = colStart;
      (!reverse && col <= colEnd) || (reverse && col >= colEnd);
      col = col + colAdj
    ) {
      const milestone = milestones[String(col)] || null;

      newRow.columns.push({
        value: col,
        id: track.id,
        name: track.name,
        checked: value >= col,
        struck: canstrike && col >= track.size + 1 - strikes,
        canaction:
          (game.user.isGM || canaction) &&
          (col == value + 1 ||
            col == value ||
            (canstrike && col == track.size + 1 - strikes) ||
            (canstrike && col == track.size - strikes)),
        lineAfter: connectors && (remaining > 1 || endIcon || reverse),
        isMilestone: milestone != null,
        milestone:
          milestone != null &&
          showMilestoneContent &&
          value >= col &&
          !(canstrike && col >= track.size + 1 - strikes)
            ? milestones[String(col)]
            : "",
      });

      remaining--;
    }

    trackData.rows.push(newRow);
  }

  if (!render) {
    return trackData;
  }

  renderOptions.highlightMilestones =
    (renderOptions.highlightMilestones ?? true) && showMilestoneContent;

  // render the track
  const template = "systems/triangleagency/templates/part-track.hbs";

  foundry.utils.mergeObject(trackData, renderOptions);
  const result = foundry.applications.handlebars.renderTemplate(
    template,
    trackData,
  );

  return result;
};

/************************************************************************
 * renders an anomaly ability
 ************************************************************************/
taHelper.renderAnomalyAbility = async ({
  ability,
  qas = null,
  anomaly = "",
  actionable = false,
  showTitle = true,
}) => {
  const template = "systems/triangleagency/templates/part-anomalyability.hbs";
  const data = ability.system;
  const context = {
    id: ability.id,
    showTitle: showTitle,
    name: ability.name,
    description: data.description,
    reference: data.reference,
    triggers: {},
  };

  if (actionable && qas) {
    const triggerData = {
      "data-qa": data.quality,
      "data-action": "anomaly-ability",
      "data-anomaly": anomaly,
      "data-abilityid": ability.id,
    };

    console.log(triggerData);

    context.description = taHelper.enhanceText(
      data.description,
      data.quality,
      qas,
      triggerData,
    );
  } else {
    context.description = taHelper.enhanceText(
      context.description,
      data.quality,
    );
  }

  if (data.track.size > 0) {
    ((data.track.id = ability.id),
      (context.track = await game.ta.helpers.taHelper.renderTrack({
        track: data.track,
        columns: data.track.size,
        canstrike: false,
        startIcon: "&#9654;",
        render: true,
        canaction: actionable,
        renderOptions: {
          trackClass: CONFIG.TA.aspects.anomaly.colorClass,
          trackType: "anomaly",
          boxClass: "abilitytrack",
        },
      })));
  }

  for (let [key] of Object.entries(data.outcomes)) {
    context.triggers[CONFIG.TA.outcomes[key].order] = {
      id: key,
      label: game.i18n.localize("TA.Outcome." + key + ".prefix"),
      description: data.outcomes[key],
      img: CONFIG.TA.assetPath + "/icons/" + CONFIG.TA.outcomes[key].image,
    };
  }

  const result = foundry.applications.handlebars.renderTemplate(
    template,
    context,
  );
  return result;
};

taHelper.togglePlaywall = async () => {
  const playwall = game.ta.helpers.taHelper.playwallJournal();
  if (playwall) {
    if (playwall.sheet.rendered) {
      playwall.sheet.close();
    } else {
      playwall.sheet.render(true);
    }
  }
};

taHelper.gotoPlaywall = async (playwall) => {
  // find the Playwall journal
  const pageRef = game.ta.helpers.taHelper.playwallPage(playwall);

  if (pageRef === undefined) {
    await foundry.applications.api.DialogV2.prompt({
      window: { title: game.i18n.localize("TA.Dialog.Notification") },
      content: game.i18n.localize("TA.Journal.MissingPlaywall"),
      label: game.i18n.localize("TA.Action.Disappointed"),
      rejectClose: false,
      modal: true,
    });
    return;
  }

  const journal = game.journal.get(pageRef.journal);
  journal.sheet.render(true, { pageId: pageRef.page });
};

taHelper.playwallPage = (playwall) => {
  const journal = game.journal.get(
    game.settings.get("triangleagency", "playwall"),
  );
  if (!journal) {
    return;
  }
  const pages = journal.pages
    .filter((page) => page.type === "Playwall" && page.system.code == playwall)
    .map((page) => page.id);
  if (pages.length > 0) {
    return {
      journal: journal.id,
      page: pages[0],
    };
  }
  return {
    journal: journal.id,
    page: null,
  };
};

taHelper.playwallJournal = () => {
  const playwall = game.settings.get("triangleagency", "playwall");
  if (playwall) {
    return game.journal.get(playwall);
  }
  return null;
};

taHelper.checkPlaywall = () => {
  if (!game.user.isGM) {
    return null;
  }

  const playwall = game.settings.get("triangleagency", "playwall");
  if (playwall != null) {
    // check that the playwall journal exists
    const journal = game.journal.get(playwall);
    if (journal) {
      return journal;
    }
  }

  // find the playwall journal
  for (const journal of game.journal) {
    if (
      journal.pages.filter(
        (page) => page.type == "Playwall" && page.system.code != "",
      ).length > 0
    ) {
      game.settings.set("triangleagency", "playwall", journal.id);
      return game.journal.get(journal.id);
    }
  }

  return null;
};

taHelper.syncAssets = async () => {
  let playwall = await game.ta.helpers.taHelper.checkPlaywall();
  if (!game.user.isGM) {
    return;
  }

  // check that the Agency assets have been imported
  let check = game.items.filter(
    (ability) =>
      ability.name == "Focus Group" && ability.type == "AnomalyAbility",
  );
  if (check.length == 0) {
    // import the Agency Data from the Compendium
    console.log("Importing Agency Data");
    const compendium = game.packs.get("triangleagency.item-agency-data");
    compendium.importAll({ keepId: true });
  }

  if (!playwall) {
    const pack = game.packs.find(
      (pack) => pack.metadata.id === "triangleagency.journalentry-gm-documents",
    );
    const journal = await pack.getDocument(
      pack.index.find((i) => i.name === "Playwall")._id,
    );
    await taJournalEntry.create(journal.toObject());

    playwall = await game.ta.helpers.taHelper.checkPlaywall();
    if (playwall) {
      for (const page of playwall.pages.filter(
        (page) => page.type == "Playwall" && page.system.code,
      )) {
        const updates = {};
        for (const key of Object.keys(page.ownership)) {
          if (key == "default") {
            if (
              page.ownership.default != CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER
            ) {
              updates["ownership.default"] =
                CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
            }
          } else {
            updates.ownership[key] = null;
          }
        }
        page.update(updates, { render: false });
      }
    }
    console.log("Importing Playwall");
  }

  check = game.journal.filter((journal) => journal.name == "GM Reference");
  if (check.length == 0) {
    const pack = game.packs.find(
      (pack) => pack.metadata.id === "triangleagency.journalentry-gm-documents",
    );
    const journal = await pack.getDocument(
      pack.index.find((i) => i.name === "GM Reference")._id,
    );
    await taJournalEntry.create(journal.toObject());
    console.log("Importing GM Reference");
  }

  check = game.actors.filter((actor) => actor.name == "Thieving Minor Anomaly");
  if (check.length == 0) {
    const folderName = "Antagonists";
    // either gets the folder id of that name or creates one if it doesnt exist.
    const folderId =
      (await game.actors.folders.getName(folderName)?.id) ||
      (await Folder.create({ name: folderName, type: "Actor" })).id;
    const pack = await game.packs.get("triangleagency.actor-minor-anomalies");
    const options = {
      folderId: folderId,
      keepId: true,
    };
    pack.importAll(options);
    console.log("Importing Minor Anomalies");
  }
};

taHelper.getGMScreenData = () => {
  const data = game.settings.get("triangleagency", "gmscreen") || {};
  data.antagonists = data.antagonists || {};
  data.others = data.others || {};
  return data;
};

taHelper.setGMScreenData = async (data) => {
  await game.settings.set("triangleagency", "gmscreen", data);
  const gmScreen = game.ta.applications.GMScreen;
  if (
    gmScreen.state ==
      foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERING ||
    gmScreen.state ==
      foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERED
  ) {
    gmScreen.render();
  }
};

taHelper.toggleGMScreen = async () => {
  const gmScreen = game.ta.applications.GMScreen;
  if (
    gmScreen.state ==
    foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERED
  ) {
    gmScreen.close();
  } else {
    gmScreen.render(true);
  }
};

taHelper.togglePlayerScreen = async () => {
  const playerScreen = new game.ta.applications.PlayerScreen();
  playerScreen.options.window.title = game.i18n.localize("TA.Agent.MyPlayedBy");

  playerScreen.render(true);
};

taHelper.currentMission = () => {
  const missions = game.items.filter(
    (item) => item.type === "MissionReport" && item.system.resolved == false,
  );
  return missions.length == 1 ? missions[0] : null;
};

taHelper.roll = async () => {
  const msg =
    '<p>Dynamic Retrocausal Probability Enhancement System Engaged:</p><div id="outcome"></div>';

  const pool = game.ta.helpers.taDice.rollGroup("d4", undefined);
  pool.primary.type = "conflict";

  const template = "systems/triangleagency/templates/part-conflict-outcome.hbs";

  game.ta.entities.taChatMessage.create({
    user: game.user.id,
    sound: CONFIG.sounds.notify,
    flags: {
      ta: {
        dice: "conflict",
        outcome: pool,
        template: template,
        message: msg,
      },
    },
  });
};

class taSocketHandler {
  constructor() {
    this.identifier = "system.triangleagency";
    this.registerSocketHandlers();
  }

  registerSocketHandlers() {
    game.socket.on(this.identifier, ({ type, payload }) => {
      //if (game.user !== game.users.activeGM) return;

      switch (type) {
        case "syncGlobals":
          this.#syncGlobals();
          break;

        case "setChaos":
          game.ta.applications.agencyOs.setChaos(payload);
          break;

        case "setBurnout":
          game.ta.applications.agencyOs.setBurnout(payload);
          break;

        case "setJournalTrack":
          this.#setJournalTrack(payload);
          break;

        case "setObjectPermissions":
          this.#setObjectPermissions(payload);
          break;

        case "addPlaywall":
          this.#addPlaywall(payload);
          break;

        case "removePlaywall":
          this.#removePlaywall(payload);
          break;

        default:
          throw new Error("unknown type");
      }
    });
  }

  emit(type, payload) {
    return game.socket.emit(this.identifier, { type, payload });
  }

  #addPlaywall(payload) {
    if (game.user !== game.users.activeGM) return;
    game.ta.helpers.taHelper.addPlaywall(
      payload.actorId,
      payload.playwall,
      payload.context,
      payload.extras,
    );
  }

  #removePlaywall(payload) {
    if (game.user !== game.users.activeGM) return;
    game.ta.helpers.taHelper.removePlaywall(payload.actorId, payload.playwall);
  }

  #setObjectPermissions(payload) {
    if (game.user !== game.users.activeGM) return;
    game.ta.helpers.taHelper.setObjectPermissions(
      payload.type,
      payload.id,
      payload.player,
      payload.value,
    );
  }

  #syncGlobals() {
    game.ta.applications.agencyOs.syncData();
  }

  #setJournalTrack(payload) {
    if (game.user !== game.users.activeGM) return;

    const page = game.journal.get(payload.journalId).pages.get(payload.pageId);
    page.update({
      "flags.ta.tracks.value": value,
    });
  }
}

class agencyOs extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2,
) {
  static DEFAULT_OPTIONS = {
    id: "agencyOs",
    tag: "div",
    window: {
      positioned: true,
    },
    classes: ["agencyOs"],
    position: {
      width: 350,
      height: 55,
    },
    form: {
      handler: agencyOs.myFormHandler,
      submitOnChange: false,
      closeOnSubmit: false,
    },
    actions: {
      myAction: agencyOs.myAction,
    },
  };

  static PARTS = {
    form: {
      template: "systems/triangleagency/templates/agencyOs.hbs",
    },
  };

  /**
   * Process form submission for the sheet
   * @this {MyApplication}                      The handler is called with the application as its bound scope
   * @param {SubmitEvent} event                   The originating form submission event
   * @param {HTMLFormElement} form                The form element that was submitted
   * @param {FormDataExtended} formData           Processed data for the submitted form
   * @returns {Promise<void>}
   */
  static async myFormHandler() {
    // Do things with the returned FormData
  }

  /**
   * @param {PointerEvent} event - The originating click event
   * @param {HTMLElement} target - the capturing HTML element which defined a [data-action]
   */
  static myAction() {
    console.log(this); // logs the specific application class instance
  }

  /**
   * Prepare context that is specific to only a single rendered part.
   *
   * It is recommended to augment or mutate the shared context so that downstream methods like _onRender have
   * visibility into the data that was used for rendering. It is acceptable to return a different context object
   * rather than mutating the shared context at the expense of this transparency.
   *
   * @param {string} partId                         The part being rendered
   * @param {ApplicationRenderContext} context      Shared context provided by _prepareContext
   * @returns {Promise<ApplicationRenderContext>}   Context data for a specific part
   * @protected
   */
  async _prepareContext(context) {
    context["chaos"] = game.settings.get("triangleagency", "chaos");
    context["chaosDec"] = context["chaos"] > 0;
    context["burnout"] = game.settings.get("triangleagency", "burnout");
    context["burnoutDec"] = context["burnout"] > 0;
    context["looseends"] = game.settings.get("triangleagency", "looseends");
    context["looseendsDec"] = context["looseends"] > 0;
    context["isGM"] = game.user.isGM;
    return context;
  }

  static calcPosition() {
    const agency = game.ta.applications.agencyOs;

    const position = {
      top: agency.position.top,
      left: agency.position.left,
      width: agency.position.width,
      height: agency.position.height,
    };

    const hotbar = document.getElementById("hotbar");
    //position.top = hotbar.offsetTop - position.height - 10;
    position.top = 15;
    position.left =
      Math.floor((window.innerWidth - hotbar.offsetWidth) / 2) +
      (hotbar.offsetWidth - position.width) / 2;

    return position;
  }

  static setPosition() {
    const agency = game.ta.applications.agencyOs;

    // Make sure the app is rendered or rendering
    if (
      !(
        agency.state ==
          foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERING ||
        agency.state ==
          foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERED
      )
    ) {
      return;
    }

    // Store the current position before any modification
    const position = this.calcPosition();

    // Only post a position change if there are modifications
    if (
      position.top !== agency.position.top ||
      position.left !== agency.position.left ||
      position.width !== agency.position.width ||
      position.height !== agency.position.height
    ) {
      agency.setPosition(position);
    }
  }

  async syncData() {
    this.render();
  }

  async close() {
    return true;
  }

  /**
   * Actions performed after any render of the Application.
   * Post-render steps are not awaited by the render process.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @protected
   */
  _onRender() {
    if (!game.user.isGM) {
      return;
    }

    const adjusters = this.element.querySelectorAll(".agencyOsAdjust");
    for (const global of adjusters) {
      global.addEventListener("change", this._adjustGlobals.bind(this));
    }
  }

  async setChaos(value) {
    if (game.user !== game.users.activeGM) return;

    await game.settings.set("triangleagency", "chaos", value);
    game.system.socketHandler.emit("syncGlobals", this);

    Object.values(ui.windows)
      .filter(
        (w) =>
          w instanceof foundry.appv1.sheets.ActorSheet &&
          w.constructor.name == "taActorAnomalySheet",
      )
      .forEach((w) => {
        w.render();
      });

    this.syncData();
  }

  async setBurnout(value) {
    if (game.user !== game.users.activeGM) return;

    if (game.ta.settings.sceneBurnout) {
      const scene = game.scenes.active;
      if (scene) {
        scene.update({ "flags.ta.burnout": value }, { render: false });
      }
    }

    await game.settings.set("triangleagency", "burnout", value);
    game.system.socketHandler.emit("syncGlobals", this);
    this.syncData();
  }

  async _adjustGlobals(event) {
    event.preventDefault();

    const type = event.currentTarget.dataset.type;
    const value = Number(event.target.value);

    switch (type) {
      case "chaos":
        this.setChaos(value);
        break;
      case "burnout":
        this.setBurnout(value);
        break;
      case "looseends":
        await game.settings.set("triangleagency", type, value);
        game.system.socketHandler.emit("syncGlobals", this);
        this.syncData();
        break;
    }
  }
}

class GMScreen extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2,
) {
  static DEFAULT_OPTIONS = {
    id: "GMScreen",
    tag: "div",
    window: {
      title: "GM",
      positioned: true,
    },
    classes: ["GMScreen"],
    position: {
      width: 600,
      height: 639,
    },
    form: {
      handler: GMScreen.myFormHandler,
      submitOnChange: false,
      closeOnSubmit: false,
    },
    actions: {
      myAction: GMScreen.myAction,
    },
    dragDrop: [{ dragSelector: "[draggable]", dropSelector: null }],
  };

  static PARTS = {
    form: {
      template: "systems/triangleagency/templates/gmScreen.hbs",
    },
  };

  constructor(options = {}) {
    super(options);
    this.#dragDrop = this.#createDragDropHandlers();
  }

  /**
   * Process form submission for the sheet
   * @this {MyApplication}                      The handler is called with the application as its bound scope
   * @param {SubmitEvent} event                   The originating form submission event
   * @param {HTMLFormElement} form                The form element that was submitted
   * @param {FormDataExtended} formData           Processed data for the submitted form
   * @returns {Promise<void>}
   */
  static async myFormHandler() {
    // Do things with the returned FormData
  }

  /**
   * @param {PointerEvent} event - The originating click event
   * @param {HTMLElement} target - the capturing HTML element which defined a [data-action]
   */
  static myAction() {
    console.log(this); // logs the specific application class instance
  }

  /**
   * Prepare context that is specific to only a single rendered part.
   *
   * It is recommended to augment or mutate the shared context so that downstream methods like _onRender have
   * visibility into the data that was used for rendering. It is acceptable to return a different context object
   * rather than mutating the shared context at the expense of this transparency.
   *
   * @param {string} partId                         The part being rendered
   * @param {ApplicationRenderContext} context      Shared context provided by _prepareContext
   * @returns {Promise<ApplicationRenderContext>}   Context data for a specific part
   * @protected
   */
  async _prepareContext(context) {
    context["isGM"] = game.user.isGM;

    const data = await game.ta.helpers.taHelper.getGMScreenData();
    const npcIds = game.actors
      .filter((actor) => actor.type === "Anomaly" || actor.type === "Bystander")
      .map((actor) => actor.id);

    context.agents = game.actors
      .filter((actor) => actor.type === "Agent" && actor.hasPlayerOwner)
      .map((agent) => {
        return { id: agent.id, name: agent.name };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    // check for anything in cache that has been deleted
    let changes = false;
    for (let id of Object.keys(data.antagonists).concat(
      Object.keys(data.others),
    )) {
      if (!npcIds.includes(id)) {
        if (data.antagonists[id]) {
          delete data.antagonists[id];
        } else if (data.others[id]) {
          delete data.others[id];
        }
        changes = true;
      }
    }
    if (changes) {
      game.ta.helpers.taHelper.setGMScreenData(data);
    }

    // get the pinned stuff
    context.antagonists = Object.keys(data.antagonists)
      .map((id) => {
        return {
          id: id,
          name: data.antagonists[id].name,
          type: data.antagonists[id].type,
        };
      })
      .sort(
        (a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name),
      );

    context.others = Object.keys(data.others)
      .map((id) => {
        return { id: id, name: data.others[id] };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return context;
  }

  static calcPosition() {
    const gmScreen = game.ta.applications.GMScreen;

    const position = {
      top: gmScreen.position.top,
      left: gmScreen.position.left,
      width: gmScreen.position.width,
      height: gmScreen.position.height,
    };

    position.top = window.innerHeight - position.height - 10;
    position.left =
      document.getElementById("ui-right").offsetLeft - position.width - 10;

    return position;
  }

  static setPosition() {
    const gmScreen = game.ta.applications.GMScreen;
    // Make sure the app is rendered or rendering
    if (
      !(
        gmScreen.state ==
          foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERING ||
        gmScreen.state ==
          foundry.applications.api.ApplicationV2.RENDER_STATES.RENDERED
      )
    ) {
      return;
    }

    // Store the current position before any modification
    const position = this.calcPosition();

    // Only post a position change if there are modifications
    if (
      position.top !== gmScreen.position.top ||
      position.left !== gmScreen.position.left ||
      position.width !== gmScreen.position.width ||
      position.height !== gmScreen.position.height
    ) {
      gmScreen.setPosition(position);
    }
  }

  async close() {
    const html = $(this.element);
    html.find(".triangleagency").data();
    const gmData = await game.ta.helpers.taHelper.getGMScreenData();
    gmData.cache = html.find(".triangleagency").data();
    await game.ta.helpers.taHelper.setGMScreenData(gmData);
    return super.close();
  }

  /**
   * Actions performed after any render of the Application.
   * Post-render steps are not awaited by the render process.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @protected
   */
  _onRender() {
    if (!game.user.isGM) {
      return;
    }

    $(this.element)
      .find(".actor,.gmbutton")
      .click(this._listenShowSomething.bind(this));
    $(this.element).find("#context-show").click(this.showActorSheet.bind(this));
    $(this.element)
      .find(".removeActor")
      .click(this._listenRemoveActor.bind(this));
    $(this.element)
      .find("#resetMissionMetrics")
      .click(this._listenResetMissionMetrics.bind(this));
    $(this.element)
      .find(".weatherbutton")
      .click(this._listenAdjustWeather.bind(this));

    const data = game.ta.helpers.taHelper.getGMScreenData();
    this.showSomething(data.cache);
  }

  async _listenAdjustWeather(event) {
    const data = event.currentTarget.dataset;
    if (!data.type) {
      return;
    }

    switch (data.type) {
      case "clear": {
        const proceed = await foundry.applications.api.DialogV2.confirm({
          window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
          content: game.i18n.localize("TA.ConfirmResetWeather"),
          position: {
            width: 450,
          },
          rejectClose: false,
          modal: true,
        });
        if (!proceed) {
          return;
        }

        const weather = game.ta.settings.weather;
        weather.current = {};
        weather.history = {};
        await game.settings.set("triangleagency", "weather", weather);
        $(this.element).find("#branchweather").html("");
        break;
      }

      case "generate": {
        const proceed = await foundry.applications.api.DialogV2.confirm({
          window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
          content: game.i18n.localize("TA.ConfirmGenerateWeather"),
          position: {
            width: 450,
          },
          rejectClose: false,
          modal: true,
        });
        if (!proceed) {
          return;
        }

        const weather = game.ta.settings.weather;
        const looseends = game.settings.get("triangleagency", "looseends");
        let currentLooseEnds = looseends;
        let ref =
          game.ta.config.unraveling.looseEnds[
            this.floorLooseEnds(currentLooseEnds)
          ];

        const work = {};
        for (let i = 1; i <= ref.weather; i++) {
          const roll =
            Math.floor(foundry.dice.MersenneTwister.random() * 20) + 1;
          if (roll % 3 == 0) {
            const count = roll / 3;
            currentLooseEnds -= count;
            if (currentLooseEnds < 0) {
              currentLooseEnds = 0;
            }
            ref =
              game.ta.config.unraveling.looseEnds[
                this.floorLooseEnds(currentLooseEnds)
              ];
            work["3"] = (work["3"] || 0) + count;
          } else if (roll == 20) {
            currentLooseEnds += 3;
            ref =
              game.ta.config.unraveling.looseEnds[
                this.floorLooseEnds(currentLooseEnds)
              ];
            work[roll] = (work[roll] || 0) + 3;
          } else {
            work[roll] = 1;
          }
        }

        // analyze the effects
        const effects = {};
        Object.keys(work).forEach((key) => {
          if (key == "3") {
            effects[key] = work[key];
          } else if (key == "20") {
            effects[key] = work[key];
          } else {
            // is effect already in history?
            if (key == "13") {
              if (weather.history[key]) {
                effects[key] = 2;
              } else {
                effects[key] = 1;
                weather.history[key] = true;
              }
            } else {
              if (weather.history[key + "a"]) {
                if (weather.history[key + "b"]) {
                  if (weather.history[key + "c"]) {
                    effects[key + "c"] = 2;
                  } else {
                    effects[key + "c"] = 1;
                    weather.history[key + "c"] = true;
                  }
                } else {
                  effects[key + "b"] = 1;
                  weather.history[key + "b"] = true;
                }
              } else {
                effects[key + "a"] = 1;
                weather.history[key + "a"] = true;
              }
            }
          }
        });

        game.ta.applications.agencyOs.setChaos(ref.chaos);
        if (currentLooseEnds != looseends) {
          await game.settings.set(
            "triangleagency",
            "looseends",
            currentLooseEnds,
          );
          game.system.socketHandler.emit("syncGlobals", null);
          game.ta.applications.agencyOs.syncData();
        }

        weather.current = {
          unraveling: this.floorLooseEnds(currentLooseEnds),
          effects: effects,
        };
        this.displayWeatherEffects(weather.current);
        await game.settings.set("triangleagency", "weather", weather);
        break;
      }
    }
  }

  floorLooseEnds(n) {
    const thresholds = [0, 11, 22, 33, 44, 55, 66, 77];
    return thresholds.findLast((t) => n >= t) ?? 0;
  }

  async displayWeatherEffects(weather) {
    let display = "";
    if ("unraveling" in weather) {
      display =
        '<div class="para">' +
        game.i18n.localize("TA.Unraveling.Restriction" + weather.unraveling) +
        "</div>";

      Object.keys(weather.effects).forEach((key) => {
        const value = weather.effects[key];
        if (key == "3") {
          const msg = game.ta.helpers.taHelper.enhanceText(
            game.i18n
              .localize("TA.Weather.3" + (value > 1 ? "Multiple" : ""))
              .replace("[count]", value),
          );
          display += '<div class="para">' + msg + "</div>";
        } else if (key == "20") {
          const msg = game.ta.helpers.taHelper.enhanceText(
            game.i18n.localize("TA.Weather.20").replace("[count]", value),
          );
          display += '<div class="para">' + msg + "</div>";
        } else {
          let msg = game.i18n.localize("TA.Weather." + key);
          if (value == 2) {
            msg += game.i18n.localize("TA.Weather.CMultiple");
          }
          display += '<div class="para">' + msg + "</div>";
        }
      });
    }
    $(this.element).find("#branchweather").html(display);
  }

  async _listenResetMissionMetrics(event) {
    const data = event.currentTarget.dataset;
    if (!data.id) {
      return;
    }

    const agent = await game.actors.get(data.id);
    agent.update({
      "system.mission.commendations": 0,
      "system.mission.demerits": 0,
    });
    const html = $(this.element);
    html.find("#missionCommendation").html("0");
    html.find("#missionDemerit").html("0");
  }

  async _listenRemoveActor(event) {
    const data = event.currentTarget.dataset;
    if (!data.id) {
      return;
    }
    const gmData = game.ta.helpers.taHelper.getGMScreenData();
    delete gmData.antagonists[data.id];
    delete gmData.others[data.id];
    await game.ta.helpers.taHelper.setGMScreenData(gmData);
    this.render();
  }

  async showActorSheet(event) {
    const data = event.currentTarget.dataset;
    if (!data.id) {
      return;
    }
    game.actors.get(data.id).sheet.render(true);
  }

  async _listenShowSomething(event) {
    event.preventDefault();
    this.showSomething(event.target.dataset);
  }

  async showSomething(data) {
    switch (data.type) {
      case "agent": {
        this.showAgent(data.id);
        break;
      }

      case "antagonist": {
        this.showAntagonist(data.level, data.id);
        break;
      }

      case "other": {
        this.showOther(data.id);
        break;
      }

      case "missionreport": {
        const mission = await game.ta.helpers.taHelper.currentMission();
        if (mission) {
          mission.sheet.render(true);
        } else {
          await foundry.applications.api.DialogV2.prompt({
            window: { title: game.i18n.localize("TA.Dialog.Notification") },
            content: game.i18n.localize("TA.Mission.NoActiveMission"),
            ok: {
              label: game.i18n.localize("TA.Action.Disappointed"),
            },
          });
        }
        return;
      }

      case "weatherreport": {
        this.showWeather();
        break;
      }
    }

    const html = $(this.element);
    // remember the action
    html.find(".triangleagency").data(data);

    html.find("#context").show();
    html.find(".actorid").attr("data-id", data.id);
    html.find('.context-data[data-type!="' + data.type + '"]').hide();
    html.find('.context-data[data-type="' + data.type + '"]').show();
  }

  async showWeather() {
    const html = $(this.element);
    const context = html.find("#context-name");
    context.html(
      '<i class="fa-solid fa-cloud-bolt fa-sm" ></i>' +
        game.i18n.localize("TA.WeatherReport"),
    );
    html.find("#context-show").hide();
    context.parent().removeClass().addClass("green");

    const weather = game.ta.settings.weather;
    this.displayWeatherEffects(weather.current);
  }

  async showOther(id) {
    const html = $(this.element);
    const agent = await game.actors.get(id);
    const context = html.find("#context-name");
    context.html(agent.name);
    html.find("#context-show").attr("data-id", id).show();
    context.parent().removeClass();

    html.find("#otherImage").attr("src", agent.img);
    html.find("#otherDescription").html(agent.system.description);
    html.find("#otherNotes").html(agent.system.notes);
  }

  async showAntagonist(type, id) {
    const html = $(this.element);
    const agent = await game.actors.get(id);
    const context = html.find("#context-name");
    context.html(agent.name);
    html.find("#context-show").attr("data-id", id).show();
    context.parent().removeClass().addClass("anomaly");

    html.find("#majorAnomaly").toggle(type == "major");
    html.find("#minorAnomaly").toggle(type == "minor");

    switch (type) {
      case "minor": {
        html.find("#minorImage").attr("src", agent.img);
        html.find("#antagThreat").html(agent.system.threat);
        let stability = "";
        for (let i = 1; i <= agent.system.stability; i++) {
          stability +=
            '<i class="fa-solid fa-circle ' +
            (i <= agent.system.currentStability
              ? "color-red"
              : "color-grey-light") +
            '"' +
            (i < agent.system.stability ? ' style="margin-right: 6px"' : "") +
            "></i>";
        }
        html.find("#antagStability").html(stability);
        html.find("#minorDescription").html(agent.system.description);
        html.find("#minorAbilities").html(agent.system.ability);
        break;
      }

      case "major": {
        html.find("#majorImage").attr("src", agent.img);
        html.find("#majorDescription").html(agent.system.description);
        html.find("#majorFocus").html(agent.system.focus);
        html.find("#majorImpulse").html(agent.system.impulse);
        html.find("#majorDomain").html(agent.system.domain);
        break;
      }
    }
  }

  async showAgent(id) {
    const html = $(this.element);
    const agent = await game.actors.get(id);

    if (!agent) {
      // has been deleted
      return;
    }

    const context = html.find("#context-name");
    context.html(agent.name);
    html.find("#context-show").attr("data-id", id).show();
    context.parent().removeClass().addClass("competency");
    const data = agent.system;

    if (data.reality.type != "") {
      const reality = await fromUuid(data.reality.type);
      html
        .find("#reality-trigger")
        .html(reality.system.realityTrigger.description);
    }
    if (data.competency.primeDirective != "") {
      html.find("#prime-directive").html(data.competency.primeDirective);
    }
    html.find("#commendation").html(data.agency.commendations);
    html.find("#demerit").html(data.agency.demerits);
    html.find("#burnout").html(data.burnout);
    html.find("#missionCommendation").html(data.mission.commendations);
    html.find("#missionDemerit").html(data.mission.demerits);

    const qaTarget = html.find("#qas").empty();
    const qas = Object.keys(data.qa)
      .map((qa) => {
        return {
          name: game.i18n.localize("TA.Quality." + qa),
          data: data.qa[qa],
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    for (let qa of qas) {
      qaTarget.append(
        "<div" +
          (qa.data.value == 0 ? ' class="color-red"' : "") +
          ">" +
          qa.name +
          "</div>",
      );
      qaTarget.append(
        '<div style="text-align: right">' +
          qa.data.value +
          " / " +
          qa.data.max +
          "</div>",
      );
    }

    html.find("#rank").html(data.agency.title);
    html
      .find("#standing")
      .html(
        game.i18n.localize(
          "TA.Standing" +
            (data.agency.demerits > 10 ? 10 : data.agency.demerits),
        ),
      );
  }

  #dragDrop;

  /**
   * Returns an array of DragDrop instances
   * @type {DragDrop[]}
   */
  get dragDrop() {
    return this.#dragDrop;
  }

  /**
   * Create drag-and-drop workflow handlers for this Application
   * @returns {DragDrop[]}     An array of DragDrop handlers
   * @private
   */
  #createDragDropHandlers() {
    return this.options.dragDrop.map((d) => {
      d.permissions = {
        //dragstart: this._canDragStart.bind(this),
        drop: this._canDragDrop.bind(this),
      };
      d.callbacks = {
        //dragstart: this._onDragStart.bind(this),
        //dragover: this._onDragOver.bind(this),
        drop: this._onDrop.bind(this),
      };
      return new foundry.applications.ux.DragDrop.implementation(d);
    });
  }

  /**
   * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
   * @param {string} selector       The candidate HTML selector for the drop target
   * @returns {boolean}             Can the current user drop on this selector?
   * @protected
   */
  _canDragDrop() {
    // game.user fetches the current user
    return true;
  }

  /**
   * Callback actions which occur when a dragged element is dropped on a target.
   * @param {DragEvent} event       The originating DragEvent
   * @protected
   */
  async _onDrop() {
    return;
  }
}

class PlayerScreen extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2,
) {
  static DEFAULT_OPTIONS = {
    id: "PlayerScreen",
    tag: "div",
    window: {
      title: "Player",
      positioned: true,
    },
    classes: ["PlayerScreen"],
    position: {
      width: 280,
      height: 400,
    },
    form: {
      handler: PlayerScreen.myFormHandler,
      submitOnChange: false,
      closeOnSubmit: false,
    },
    actions: {
      myAction: PlayerScreen.myAction,
    },
  };

  static PARTS = {
    form: {
      template: "systems/triangleagency/templates/playerScreen.hbs",
    },
  };

  /**
   * Process form submission for the sheet
   * @this {MyApplication}                      The handler is called with the application as its bound scope
   * @param {SubmitEvent} event                   The originating form submission event
   * @param {HTMLFormElement} form                The form element that was submitted
   * @param {FormDataExtended} formData           Processed data for the submitted form
   * @returns {Promise<void>}
   */
  static async myFormHandler() {
    // Do things with the returned FormData
  }

  /**
   * @param {PointerEvent} event - The originating click event
   * @param {HTMLElement} target - the capturing HTML element which defined a [data-action]
   */
  static myAction() {
    console.log(this); // logs the specific application class instance
  }

  /**
   * Prepare context that is specific to only a single rendered part.
   *
   * It is recommended to augment or mutate the shared context so that downstream methods like _onRender have
   * visibility into the data that was used for rendering. It is acceptable to return a different context object
   * rather than mutating the shared context at the expense of this transparency.
   *
   * @param {string} partId                         The part being rendered
   * @param {ApplicationRenderContext} context      Shared context provided by _prepareContext
   * @returns {Promise<ApplicationRenderContext>}   Context data for a specific part
   * @protected
   */
  async _prepareContext(context) {
    context.isGM = game.user.isGM;

    const valid = game.actors
      .filter((actor) => actor.type === "Bystander" && actor.hasPlayerOwner)
      .map((actor) => actor.id);

    context.npcs = [];
    const unique = [];
    const myName = game.user.name;
    for (let agent of game.actors.filter(
      (actor) => actor.type === "Agent" && actor.hasPlayerOwner,
    )) {
      if (agent.system.reality) {
        for (let relationship of Object.values(
          agent.system.reality.relationships,
        )) {
          if (relationship.playedby != myName) {
            continue;
          }
          if (
            relationship.bystanderId &&
            valid.includes(relationship.bystanderId)
          ) {
            if (!unique.includes(relationship.bystanderId)) {
              context.npcs.push({
                id: relationship.bystanderId,
                name: relationship.name,
              });
              unique.push(relationship.bystanderId);
            }
          }
        }
      }
    }
    context.npcs.sort((a, b) => a.name.localeCompare(b.name));
    return context;
  }

  static calcPosition() {}

  static setPosition() {}

  /**
   * Actions performed after any render of the Application.
   * Post-render steps are not awaited by the render process.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @protected
   */
  _onRender() {
    $(this.element).find(".npc").click(this.showNPC.bind(this));
  }

  async showNPC(event) {
    const data = event.currentTarget.dataset;
    if (!data.bystander) {
      return;
    }
    const npc = game.actors.get(data.bystander);
    if (npc) {
      npc.sheet.render(true);
    }
  }
}

async function preloadTemplates() {
  const templatePaths = [
    "systems/triangleagency/templates/part-d4-outcome.hbs",
    "systems/triangleagency/templates/part-d10-outcome.hbs",
    "systems/triangleagency/templates/part-d20-outcome.hbs",
    "systems/triangleagency/templates/part-track.hbs",
    "systems/triangleagency/templates/part-anomalyability.hbs",
    "systems/triangleagency/templates/agencyOs.hbs",
    "systems/triangleagency/templates/actor-agent-sheet.hbs",
    "systems/triangleagency/templates/actor-anomaly-sheet.hbs",
  ];

  return foundry.applications.handlebars.loadTemplates(templatePaths);
}

async function setupMacros() {
  // let macro;
  // if(game.macros.size > 0){
  //   return;
  // }
  // //for (const id of game.macros.map(e => e.id)) await game.macros.get(id).delete();
  // if (game.user.isGM) {
  //   // check if system macros exist
  //   let macros = await game.macros.filter(
  //     (macro) => macro.flags?.ta?.key == "GMScreen",
  //   );
  //   if (macros.length == 0) {
  //     // create the GM Screen macro, for GMs only
  //     let macro = {
  //       name: game.i18n.localize("TA.GMScreen"),
  //       type: "script",
  //       author: game.userId,
  //       img: CONFIG.TA.assetPath + "/icons/gm.png",
  //       scope: "global",
  //       ownership: {
  //         default: CONST.DOCUMENT_OWNERSHIP_LEVELS.NONE,
  //       },
  //       command: "game.ta.helpers.taHelper.toggleGMScreen();",
  //       flags: {
  //         "ta.key": "GMScreen",
  //       },
  //     };
  //     await Macro.create(macro);
  //     macros = await game.macros.filter(
  //       (macro) => macro.flags.ta.key == "GMScreen",
  //     );
  //   }
  //   macro = macros[0];
  //   if (!Object.values(game.user.hotbar).includes(macro.id)) {
  //     game.user.assignHotbarMacro(macro, 1);
  //   }
  //     // create the GM Screen macro, for Players
  //     let macro = {
  //       name: game.i18n.localize("TA.Playwall"),
  //       type: "script",
  //       author: game.userId,
  //       img: CONFIG.TA.assetPath + "/icons/playwall.png",
  //       scope: "global",
  //       ownership: {
  //         default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER,
  //       },
  //       command: "game.ta.helpers.taHelper.togglePlaywall();",
  //       flags: {
  //         "ta.key": "Playwall",
  //       },
  //     };
  //     await Macro.create(macro);
  //     // create the GM Screen macro, for Players
  //     let macro = {
  //       name: game.i18n.localize("TA.MyAgent"),
  //       type: "script",
  //       author: game.userId,
  //       img: CONFIG.TA.assetPath + "/icons/agent.png",
  //       scope: "global",
  //       ownership: {
  //         default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER,
  //       },
  //       command: "game.toggleCharacterSheet();",
  //       flags: {
  //         "ta.key": "MyAgent",
  //       },
  //     };
  //     await Macro.create(macro);
  //   macros = await game.macros.filter(
  //     (macro) => macro.flags.ta.key == "PlayerScreen",
  //   );
  //   if (game.macros.size == 0) {
  //     // create the Player Screen macro, for Players
  //     let macro = {
  //       name: game.i18n.localize("TA.Agent.MacroMyPlayedBy"),
  //       type: "script",
  //       author: game.userId,
  //       img: CONFIG.TA.assetPath + "/icons/playedby.png",
  //       scope: "global",
  //       ownership: {
  //         default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER,
  //       },
  //       command: "game.ta.helpers.taHelper.togglePlayerScreen();",
  //       flags: {
  //         "ta.key": "PlayerScreen",
  //       },
  //     };
  //     await Macro.create(macro);
  //   }
  // } else {
  //   // check if the player has the agent toggle in hotbar
  //   let macros = await game.macros.filter(
  //     (macro) => macro.flags.ta.key == "MyAgent",
  //   );
  //   if (macros.length > 0) {
  //     macro = macros[0];
  //     if (!Object.values(game.user.hotbar).includes(macro.id)) {
  //       await game.user.assignHotbarMacro(macro, 1);
  //     }
  //   }
  //   // check if the playwall macro is in hotbar
  //   macros = await game.macros.filter(
  //     (macro) => macro.flags.ta.key == "PlayerScreen",
  //   );
  //   if (macros.length > 0) {
  //     macro = macros[0];
  //     if (!Object.values(game.user.hotbar).includes(macro.id)) {
  //       await game.user.assignHotbarMacro(macro, 3);
  //     }
  //   }
  // }
  // // check if the playwall macro is in hotbar
  // let macros = await game.macros.filter(
  //   (macro) => macro.flags.ta.key == "Playwall",
  // );
  // if (macros.length > 0) {
  //   macro = macros[0];
  //   if (!Object.values(game.user.hotbar).includes(macro.id)) {
  //     await game.user.assignHotbarMacro(macro, 2);
  //   }
  // }
}

async function migrate() {
  if (!game.user.isGM) {
    return;
  }

  // delete v12 macros
  for (const id of game.macros.map((e) => e.id))
    await game.macros.get(id).delete();

  // may need to clear old chat messages
  ChatMessage.deleteDocuments(game.messages.map((i) => i.id));

  /*
  // reset all Playwall page permissions to Observer
  const playwall = game.ta.helpers.taHelper.playwallJournal();
  if (playwall) {
    for(const page of playwall.pages.filter(page => page.type == "Playwall" && page.system.code)) {
      const updates = {};
      for(const key of Object.keys(page.ownership)) {
        if (key === "default") {
          if (page.ownership.default != CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER) {
            updates["ownership.default"] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
          }
        }
        else {
          updates["ownership.-=" + key] = null;
        }
      }
      page.update(updates, { render: false });
    }
  }
  */

  // set compendiums player permissions
  /*
  const compendium = game.packs.get("triangleagency.item-agency-data");
  let update = {
    "ownership.ASSISTANT": "OWNER",
    "ownership.GAMEMASTER": "OWNER",
    "ownership.PLAYER": "NONE"
  }
  compendium.update(update);
  console.log(compendium)
  */

  // set migration control for the current version
  game.settings.set(
    "triangleagency",
    "systemMigrationVersion",
    game.system.version,
  );
}

class Playwall extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      code: new fields.StringField({ required: true, initial: "" }),
      aspect: new fields.StringField({ required: true, initial: "undefined" }),
      content: new fields.HTMLField({ required: false, blank: true }),
      references: new fields.ObjectField(),
    };
  }

  prepareDerivedData() {
    this.aspect = this.aspect || "undefined";
    this.references.abilities = this.references.abilities || {};
    this.references.requisitions = this.references.requisitions || {};
    this.references.tracks = this.references.tracks || {};
  }
}

class taActor extends Actor {
  prepareData() {
    super.prepareData();
    //CONFIG.debug.hooks = true;
  }

  /** @override */
  prepareBaseData() {
    super.prepareBaseData();
    switch (this.type) {
      case "Agent":
        return this._prepareAgentData(this);
      case "Anomaly":
        return this._prepareAnomalyData(this);
      case "Bystander":
        return this._prepareBystanderData(this);
    }
  }

  /** @override */
  prepareDerivedData() {
    switch (this.type) {
      case "Agent":
        return this._prepareDerivedAgentData(this);
      case "Anomaly":
        return this._prepareDerivedAnomalyData(this);
      case "Bystander":
        return this._prepareDerivedBystanderData(this);
    }
  }

  /*  Data Preparation Helpers                    */

  _prepareAgentData() {}

  _prepareAnomalyData() {}

  _prepareBystanderData() {}

  /*  Derived Data Preparation Helpers            */

  _prepareDerivedAgentData(actorData) {
    const data = actorData.system;

    // get the agent's title
    const competencyValue = data.competency.workLife.value;
    const ranks = game.ta.config.agencyRanks;
    const rank = Object.keys(ranks)
      .filter((rank) => competencyValue >= ranks[rank].order)
      .pop();
    data.agency.title = game.i18n.localize(ranks[rank].name);

    // get a merged playwall refernce list
    data.allPlaywall = [];
    Object.keys(data.achievements).forEach((context) => {
      data.allPlaywall = data.allPlaywall.concat(
        Object.keys(data.achievements[context]),
      );
    });

    data.dice = { d6: false, d8: false, d10: false, d20: false };
    // special dice
    if (data.allPlaywall.includes("U2")) {
      data.dice.d6 = true;
    }
    if (data.allPlaywall.includes("G3")) {
      data.dice.d8 = true;
    }
    if (data.allPlaywall.includes("N1")) {
      data.dice.d10 = true;
    }
    if (data.allPlaywall.includes("T3")) {
      data.dice.d20 = true;
    }

    data.hasDice =
      data.dice.d6 || data.dice.d8 || data.dice.d10 || data.dice.d20;
    data.ataDice = (data.dice.d8 ? 1 : 0) + (data.dice.d20 ? 1 : 0);
    data.anomalyDice = (data.dice.d6 ? 1 : 0) + (data.dice.d10 ? 1 : 0);
  }

  _prepareDerivedAnomalyData(actorData) {
    actorData.system;
  }

  _prepareDerivedBystanderData(actorData) {
    actorData.system;
  }

  getPlaywall(reference) {
    const data = this.system;
    reference = reference.toUpperCase();

    const achievements = Object.keys(data.achievements);
    for (let i = 0; i < achievements.length; i++) {
      const context = achievements[i];
      if (data.achievements[context][reference]) {
        return {
          playwall: reference,
          context: context,
          extra: data.achievements[context][reference],
        };
      }
    }
    return {};
  }

  async addPlaywall(playwall, context, extras) {
    playwall = playwall.toUpperCase();
    //if (this.system.allPlaywall.includes(playwall)) { return }

    const key = ["anomaly", "reality", "competency"].includes(context)
      ? context
      : "other";
    const update = {};
    update["system.achievements." + key + "." + playwall] = extras;
    this.update(update);

    const pageRef = await game.ta.helpers.taHelper.playwallPage(playwall);
    if (pageRef === undefined) {
      return;
    }

    const journal = await game.journal.get(pageRef.journal);
    const page = await journal.pages.get(pageRef.page);

    // set permissions
    if (game.user.isGM) {
      const pageUpdate = {};
      /* // no longer neeeded
      const journalUpdate = {};
      this.myOwners().forEach(owner => {
        if (!Object.keys(journal.ownership).includes(owner)) {
          journalUpdate["ownership." + owner] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
        }
        pageUpdate["ownership." + owner] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
      });
      await journal.update(journalUpdate);
    */
      pageUpdate.ownership[game.user.id] =
        CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
      await page.update(pageUpdate);
    } else if (
      game.user.character &&
      game.user.character.id == this.id &&
      journal &&
      journal.sheet.rendered
    ) {
      game.ta.helpers.taHelper.togglePlaywall();
    }

    this.alignPlaywallAbilities(page, false);
  }

  async removePlaywall(playwall) {
    playwall = this.getPlaywall(playwall);
    if (Object.keys(playwall).length == 0) {
      return false;
    }

    const update = {};
    update[
      "system.achievements." + playwall.context + ".-=" + playwall.playwall
    ] = null;
    this.update(update);

    const pageRef = await game.ta.helpers.taHelper.playwallPage(
      playwall.playwall,
    );
    if (pageRef === undefined) {
      return;
    }

    const journal = await game.journal.get(pageRef.journal);
    const page = await game.journal
      .get(pageRef.journal)
      .pages.get(pageRef.page);

    // set permissions
    if (game.user.isGM) {
      const pageUpdate = {};
      pageUpdate.ownership[game.user.id] =
        CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;
      await page.update(pageUpdate);
    } else if (
      game.user.character &&
      game.user.character.id == this.id &&
      journal &&
      journal.sheet.rendered
    ) {
      game.ta.helpers.taHelper.togglePlaywall();
    }

    this.alignPlaywallAbilities(page, true);
  }

  myOwners() {
    return Object.entries(this.ownership)
      .filter(
        ([id, level]) =>
          !game.users.get(id)?.isGM &&
          id != "default" &&
          level === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER,
      )
      .map(([id]) => id);
  }

  alignPlaywallAbilities(page, remove = false) {
    const playwall = page.flags.ta.abilities;
    const createItems = [];
    const deleteItems = [];

    Object.keys(playwall).forEach((id) => {
      const ref = playwall[id];
      let ability = game.items.get(id);

      switch (ref.mergeAction) {
        case "add": {
          const check = this.items.filter(
            (doc) =>
              doc.type == ability.type && doc.flags.ta.originalId == ability.id,
          );
          if (remove) {
            if (check.length == 0) {
              return;
            }
            deleteItems.push(check[0].id);
          } else {
            if (check.length > 0) {
              return;
            }
            const newAbility = foundry.utils.duplicate(ability);
            newAbility.flags.ta = {
              originalId: ability.id,
            };
            createItems.push(newAbility);
          }
          break;
        }

        case "replace": {
          if (remove) {
            // remove the current ability and put the target back
            let check = this.items.filter(
              (doc) =>
                doc.type == ability.type &&
                doc.flags.ta.originalId == ability.id,
            );
            if (check.length > 0) {
              deleteItems.push(check[0].id);
            }
            check = this.items.filter(
              (doc) =>
                doc.type == ability.type &&
                doc.flags.ta.originalId == ref.targetAbilityId,
            );
            if (check.length == 0) {
              ability = game.items.get(ref.targetAbilityId);
              const newAbility = foundry.utils.duplicate(ability);
              newAbility.flags.ta = {
                originalId: ability.id,
              };
              createItems.push(newAbility);
            }
          } else {
            // remove the target ability and put the new one in
            let check = this.items.filter(
              (doc) =>
                doc.type == ability.type &&
                doc.flags.ta.originalId == ref.targetAbilityId,
            );
            if (check.length > 0) {
              deleteItems.push(check[0].id);
            }
            check = this.items.filter(
              (doc) =>
                doc.type == ability.type &&
                doc.flags.ta.originalId == ability.id,
            );
            if (check.length == 0) {
              const newAbility = foundry.utils.duplicate(ability);
              newAbility.flags.ta = {
                originalId: ability.id,
              };
              createItems.push(newAbility);
            }
          }
          break;
        }

        case "merge": {
          // find the targeted ability
          let target = this.items.filter(
            (doc) =>
              doc.type == ability.type &&
              doc.flags.ta.originalId == ref.targetAbilityId,
          );
          if (target.length == 0) {
            return;
          }

          target = target[0];
          const update = {};

          if (remove) {
            // remove the description from the target's description
            const desc = ability.system.description;
            if (desc != "" && target.system.description.includes(desc)) {
              update["system.description"] = target.system.description.replace(
                desc,
                "",
              );
            }
            // get the original ability that the target is based on, to establish a baseline for outcomes
            const original = game.items.get(target.flags.ta.originalId);
            // if we don't find it, there's not much we can do

            if (original != null) {
              // restore the original outcomes
              Object.keys(ability.system.outcomes).forEach((key) => {
                if (Object.keys(original.system.outcomes).includes(key)) {
                  update["system.outcomes." + key] =
                    original.system.outcomes[key];
                } else {
                  update["system.outcomes.-=" + key] = null;
                }
              });
            }
          } else {
            // add the description to the end of the target's description, if it isn't already there
            const desc = ability.system.description;
            if (desc != "" && !target.system.description.includes(desc)) {
              update["system.description"] = target.system.description + desc;
            }
            // add or replace outcomes
            Object.keys(ability.system.outcomes).forEach((key) => {
              update["system.outcomes." + key] = ability.system.outcomes[key];
            });
          }
          target.update(update);
          break;
        }
      }
    });

    this.deleteEmbeddedDocuments("Item", deleteItems);
    this.createEmbeddedDocuments("Item", createItems);
  }

  /* // No longer needed
  async _onUpdate(data, options, userId) {
    await super._onUpdate(data, options, userId);
    if (this.type == "Agent" && game.user.isGM && data.ownership) {
      game.ta.helpers.taHelper.resyncPlaywall(this.id, true);
    }
  }
  */
}

class taItem extends Item {
  prepareData() {
    super.prepareData();

    //CONFIG.debug.hooks = true;
  }

  /** @override */
  prepareBaseData() {
    switch (this.type) {
      case "Anomaly":
        return this._prepareAnomalyData(this);
      case "AnomalyAbility":
        return this._prepareAnomalyAbilityData(this);
      case "ChaosEffect":
        return this._prepareChaosEffectData(this);
      case "Competency":
        return this._prepareCompetencyData(this);
      case "Reality":
        return this._prepareRealityData(this);
      case "Requisition":
        return this._prepareRequisitionData(this);
      case "MissionReport":
        return this._prepareMissionReportData(this);
      case "Sponsorship":
        return this._prepareSponsorshipData(this);
    }
  }

  /** @override */
  prepareDerivedData() {
    //data.isadmin = game.isAdmin();

    switch (this.type) {
      case "MissionReport":
        return this._prepareMissionReportDerivedData(this);
    }
  }

  /*  Data Preparation Helpers                    */

  _prepareAnomalyData() {}

  _prepareAnomalyAbilityData() {}

  _prepareChaosEffectData() {}

  _prepareCompetencyData() {}

  _prepareRealityData() {}

  _prepareRequisitionData() {}

  _prepareMissionReportData() {}

  _prepareSponsorshipData() {}

  /*  Derived Data Preparation Helpers            */

  _prepareMissionReportDerivedData(itemData) {
    const data = itemData.system;

    Object.keys(data.objectives).forEach((id) => {
      const objective = data.objectives[id];
      switch (objective.type) {
        case "commendation":
          objective.display =
            "<b>+" +
            objective.value +
            " " +
            (objective.value > 1
              ? game.i18n.localize("TA.Agent.Commendations")
              : game.i18n.localize("TA.Agent.Commendation")) +
            "</b> " +
            objective.description;
          break;
        case "demerit":
          objective.display =
            "<b>+" +
            objective.value +
            " " +
            (objective.value > 1
              ? game.i18n.localize("TA.Agent.Demerits")
              : game.i18n.localize("TA.Agent.Demerit")) +
            "</b> " +
            objective.description;
          break;
        case "custom":
          objective.display = objective.description;
          break;
      }
    });
  }
}

class taChatMessage extends ChatMessage {
  /** @override */
  prepareData() {
    super.prepareData();
  }

  /** @override */
  async getHTML() {
    const html = await super.getHTML();
    if (this.flags.ta) {
      await this.renderOutcome(html);
      this.activateListeners(html);
    }
    return html;
  }

  /** @override */
  async renderHTML() {
    const html = await super.renderHTML();
    if (this.flags.ta) {
      await this.renderOutcome(html);
      this.activateListeners(html);
    }
    return html;
  }

  activateListeners(html) {
    if (this instanceof taChatMessage && this.flags.ta) {
      $(html).find("#qa-adjust").click(this._listenAdjustQA.bind(this));
      $(html).find("#lockOutcome").click(this._listenLockOutcome.bind(this));

      if (["d4", "d10"].includes(this.flags.ta.dice)) {
        $(html).find(".adjustDie").click(this._listenAdjustDie.bind(this));
        if (
          this.flags.ta.outcome.supplement.active &&
          this.flags.ta.outcome.supplement.type == "d8" &&
          this.flags.ta.outcome.supplement.result.success > 0
        ) {
          $(html)
            .find(".adjustSupplement")
            .click(this._listenAdjustSupplement.bind(this));
        }
      }
    }
  }

  async _listenAdjustSupplement(event) {
    event.preventDefault();
    document.activeElement.blur();

    event.currentTarget.dataset.dice;
    let action = event.target.dataset.adjust;
    if (!action) {
      return;
    }

    const flags = this.flags.ta;
    const outcome = flags.outcome;
    const supplement = outcome.supplement;
    const updates = {};

    switch (action) {
      case "up": {
        updates["flags.ta.outcome.qa.spent"] = supplement.result.success;
        break;
      }
      case "down": {
        updates["flags.ta.outcome.qa.spent"] = supplement.result.success * -1;
        break;
      }
      case "ignore": {
        updates["flags.ta.outcome.qa.spent"] = 0;
        break;
      }
    }
    this.update(updates);
  }

  async _listenAdjustDie(event) {
    event.preventDefault();
    document.activeElement.blur();
    const type = event.currentTarget.dataset.adjust;
    const dice = event.currentTarget.dataset.dice;
    let action = event.target.dataset.adjust;
    if (!action) {
      return;
    }

    const flags = this.flags.ta;
    const outcome = flags.outcome;
    const updates = {};

    switch (action) {
      case "up": {
        if (dice == "d10") {
          updates["flags.ta.outcome.primary.result.pip"] =
            outcome.primary.result.pip + 1;
        }
        if (outcome[type].down > 0) {
          updates["flags.ta.outcome." + type + ".down"] =
            outcome[type].down - 1;
        } else {
          updates["flags.ta.outcome." + type + ".up"] = outcome[type].up + 1;
        }
        break;
      }

      case "down": {
        if (dice == "d10") {
          updates["flags.ta.outcome.primary.result.pip"] =
            outcome.primary.result.pip - 1;
        }
        if (outcome[type].up > 0) {
          updates["flags.ta.outcome." + type + ".up"] = outcome[type].up - 1;
        } else {
          updates["flags.ta.outcome." + type + ".down"] =
            outcome[type].down + 1;
        }
        break;
      }

      case "setFace": {
        let template = "systems/triangleagency/templates/dialog-d6-options.hbs";
        let msg = game.i18n.localize(
          "TA.Dialog.D6Options" +
            (event.target.dataset.type == "qa" ? "QA" : "Demerit"),
        );
        let selected = outcome.supplement.result.pip;

        const part = await foundry.applications.handlebars.renderTemplate(
          template,
          {
            selectedFace: selected,
            message: msg,
          },
        );

        await foundry.applications.api.DialogV2.wait({
          window: { title: game.i18n.localize("TA.Dialog.Notification") },
          modal: true,
          rejectClose: false,
          content: part,
          buttons: [
            {
              action: "go",
              label: game.i18n.localize("TA.Action.Okay"),
              default: true,
              callback: (event, button) => {
                selected = Number(button.form.elements.selectedFace.value);
              },
            },
            {
              action: "exit",
              label: game.i18n.localize("TA.Action.Cancel"),
            },
          ],
          render: (event) => {
            const dice = event.target.element.querySelector("#diceList");
            dice
              .querySelector(
                'div[data-id="' + outcome.supplement.result.pip + '"]',
              )
              .classList.add("faceSelect");
            dice.addEventListener("click", function (die) {
              if (die.target.dataset.id) {
                const selected = dice.querySelector("#selectedFace");
                dice
                  .querySelector('div[data-id="' + selected.value + '"]')
                  .classList.remove("faceSelect");
                die.target.classList.add("faceSelect");
                selected.value = die.target.dataset.id;
              }
            });
          },
        });

        if (selected != outcome.supplement.result.pip) {
          updates["flags.ta.outcome.supplement.result.pip"] = selected;
          updates["flags.ta.outcome." + event.target.dataset.type + ".spent"] =
            outcome[event.target.dataset.type].spent + 1;
          this.update(updates);
        }

        break;
      }

      case "reset": {
        updates["flags.ta.outcome.qa.spent"] = 0;
        updates["flags.ta.outcome.qa.up"] = 0;
        updates["flags.ta.outcome.qa.down"] = 0;
        updates["flags.ta.outcome.demerit.spent"] = 0;
        updates["flags.ta.outcome.demerit.up"] = 0;
        updates["flags.ta.outcome.demerit.down"] = 0;
        updates["flags.ta.outcome.primary.result.pip"] =
          outcome.primary.result.roll[0];
        if (outcome.supplement.active) {
          updates["flags.ta.outcome.supplement.result.pip"] =
            outcome.supplement.result.roll[0];
        }
        break;
      }
    }
    this.update(updates);
  }

  async _listenLockOutcome(event) {
    event.preventDefault();
    document.activeElement.blur();
    const outcome = this.flags.ta.outcome;

    this.update({ "flags.ta.outcome.lock": true });

    if (this.speaker.actor) {
      const actor = game.actors.get(this.speaker.actor);
      const quality = outcome.primary.result.quality.id;
      const update = {};

      if (outcome.qa.used > 0) {
        update["system.qa." + quality + ".value"] =
          actor.system.qa[quality].value - outcome.qa.used;
      }
      if (outcome.demerit && outcome.demerit.used > 0) {
        update["system.agency.demerits"] =
          actor.system.agency.demerits - outcome.demerit.used;
      }
      if (actor.system.burnoutRelease) {
        update["system.burnoutRelease"] = false;
      }

      actor.update(update);
    }

    if (
      outcome.action == "ata" &&
      game.ta.settings.autoATABurnout &&
      outcome.effective.success == 0
    ) {
      let burnout = Number(game.settings.get("triangleagency", "burnout")) + 1;
      if (game.user !== game.users.activeGM) {
        game.system.socketHandler.emit("setBurnout", burnout);
      } else {
        game.ta.applications.agencyOs.setBurnout(burnout);
      }
    }

    if (outcome.effective.chaos > 0) {
      let chaos =
        Number(game.settings.get("triangleagency", "chaos")) +
        outcome.effective.chaos;
      if (game.user !== game.users.activeGM) {
        game.system.socketHandler.emit("setChaos", chaos);
      } else {
        game.ta.applications.agencyOs.setChaos(chaos);
      }
    }
  }

  async _listenAdjustQA(event) {
    event.preventDefault();
    document.activeElement.blur();

    const flags = this.flags.ta;
    const result = flags.outcome;
    const updates = {};

    switch (event.target.dataset.action) {
      case "spend":
        if (result.qualityCurrent > 0 && result.effectiveSuccess < 6) {
          updates["flags.ta.outcome.qualityCurrent"] =
            Number(result.qualityCurrent) - 1;
          updates["flags.ta.qaspent"] = Number(flags.qaspent) + 1;
          this.update(updates);
        }
        break;
      case "reclaim":
        if (flags.qaspent > 0) {
          updates["flags.ta.outcome.qualityCurrent"] =
            Number(result.qualityCurrent) + 1;
          updates["flags.ta.qaspent"] = Number(flags.qaspent) - 1;
          this.update(updates);
        }
        break;
    }
  }

  async renderOutcome(html) {
    let template = "systems/triangleagency/templates/chat-outcome.hbs";
    const flags = this.flags.ta;

    flags.action;

    const context = {
      title: flags.title,
      message: flags.message,
    };

    const part = $(
      await foundry.applications.handlebars.renderTemplate(template, context),
    );

    switch (flags.dice) {
      case "conflict": {
        const outcome = flags.outcome || {};
        outcome.conflictResult = [];
        if (outcome.primary.result.success == 0) {
          outcome.conflictResult.push("none");
        } else {
          for (let i = 1; i <= outcome.primary.result.success; i++) {
            outcome.conflictResult.push("success");
          }
        }

        let result = $(
          await foundry.applications.handlebars.renderTemplate(
            flags.template,
            outcome,
          ),
        );
        console.log(result);
        part.find(".chatMessage").append(result);
        break;
      }

      case "d4": {
        const outcome = flags.outcome || {};
        outcome.qa.used = outcome.qa.up + outcome.qa.down;
        if (outcome.supplement.active && outcome.supplement.type == "d8");
        else {
          outcome.qa.used += outcome.qa.spent;
        }
        outcome.qa.remaining = outcome.qa.max - outcome.qa.used;
        outcome.demerit.used =
          (outcome.demerit.spent + outcome.demerit.up + outcome.demerit.down) *
          3;
        outcome.demerit.remaining = outcome.demerit.max - outcome.demerit.used;
        outcome.effective = {
          d4display: ["blank", "blank", "blank", "blank", "blank", "blank"],
          success:
            outcome.primary.result.success - outcome.burnout + outcome.qa.up,
        };

        let supplementSuccess = 0;
        outcome.showDemerits = false;
        if (outcome.supplement.active) {
          const supplement = outcome.supplement;
          supplementSuccess =
            supplement.result.pip % 3 == 0 ? supplement.result.pip / 3 : 0;

          if (supplement.type == "d6") {
            //outcome.primary.result.success += supplementSuccess;
            outcome.showDemerits = true;
          } else if (supplement.type == "d8") {
            if (outcome.qa.spent != 0) {
              outcome.primary.result.success += outcome.qa.spent;
              if (outcome.primary.result.success < 0) {
                outcome.primary.result.success = 0;
              }
            }
          }
        }

        let displaySuccess = outcome.primary.result.success;

        /*
        burnout: 2, success: 1, displaySuccess: -1 (0), displayBurnout: 1
        burnout: 2, success: 5, displaySuccess: 3 (3), displayBurnout: 5
        burnout: 5, success: 3, displaySuccess: -2 (3), displayBurnout: 3
        burnout: 5, success: 5, displaySuccess: 0, displayBurnout: 5
        */

        let displayBurnout = outcome.primary.result.success;
        if (displaySuccess > outcome.burnout) {
          displaySuccess = displaySuccess - outcome.burnout;
        } else if (outcome.burnout >= displaySuccess) {
          displaySuccess = 0;
        }
        //displaySuccess += outcome.qa.up;
        displaySuccess += outcome.qa.up - outcome.qa.down;

        outcome.effective.success =
          displaySuccess +
          (outcome.supplement.type != "d8" ? supplementSuccess : 0);

        for (let i = 1; i <= displayBurnout && i <= 6; i++) {
          outcome.effective.d4display[i - 1] = "burnout";
        }
        for (let i = displayBurnout; i >= 1; i--) {
          if (i > displayBurnout - outcome.qa.down) {
            outcome.effective.d4display[i - 1] = "blank";
          }
        }
        for (let i = 1; i <= displaySuccess && i <= 6; i++) {
          outcome.effective.d4display[i - 1] = "red";
        }

        const hash = Object.fromEntries([
          ...outcome.effective.d4display.reduce(
            (map, key) => map.set(key, (map.get(key) || 0) + 1),
            new Map(),
          ),
        ]);
        if (
          displaySuccess +
            (outcome.supplement.active && outcome.supplement.type == "d6"
              ? supplementSuccess
              : 0) ==
          3
        ) {
          outcome.effective.chaos = 0;
        } else {
          outcome.effective.chaos = outcome.burnout + (hash["blank"] ?? 0);
          if (
            outcome.supplement.active &&
            outcome.supplement.type == "d6" &&
            supplementSuccess == 0
          ) {
            // add 1 chaos from the d6 failure
            outcome.effective.chaos += 1;
          }
        }

        // set numbers for failed dice
        for (let i = 0; i < 6; i++) {
          if (outcome.effective.d4display[i] == "blank") {
            outcome.effective.d4display[i] +=
              "-" + outcome.primary.result.roll[i];
          }
        }

        // Triscendence override
        if (outcome.primary.result.triscendence) {
          outcome.effective.success = 3;
          outcome.effective.chaos = 0;
        }

        if (outcome.primary.result.message == "") {
          let msg = "";
          if (displaySuccess > 0) {
            switch (outcome.action) {
              case "ata":
                msg = game.i18n.localize("TA.Chat.ATASuccess");
                msg = msg.replace("[success]", outcome.effective.success);
                break;
              case "anomaly":
                msg = game.i18n.localize("TA.Chat.AbilitySuccess");
                msg = msg.replace("[success]", outcome.effective.success);
                break;
            }
          } else {
            switch (outcome.action) {
              case "ata":
                msg = game.i18n.localize("TA.Chat.ATAFailure");
                break;
              case "anomaly":
                msg = game.i18n.localize("TA.Chat.AbilityFailure");
                break;
            }
          }
          msg = msg.replace("[chaos]", outcome.effective.chaos);
          outcome.primary.result.message = msg;
        }

        if (flags.ability && flags.ability.outcomes && !outcome.unl3ash) {
          outcome.abilityMessage = this.anomalyOutcomes(
            flags.ability.outcomes,
            outcome.effective.success,
            outcome.primary.result.triscendence,
          );
        }

        let result = $(
          await foundry.applications.handlebars.renderTemplate(
            flags.template,
            outcome,
          ),
        );

        // set the adjment options for d4
        if (outcome.qa.active) {
          const adjust = result.find('.adjustDie[data-adjust="qa"]');

          const up = adjust.find('i[data-adjust="up"]');
          if (displaySuccess == 6) {
            up.addClass("disabled");
          } else if (outcome.qa.remaining == 0 && outcome.qa.down == 0) {
            up.addClass("disabled");
          } else {
            up.css("cursor", "pointer");
          }

          const down = adjust.find('i[data-adjust="down"]');

          if (displaySuccess == 0) {
            down.addClass("disabled");
          } else if (outcome.qa.remaining == 0 && outcome.qa.up == 0) {
            /*
          if (outcome.primary.result.success + outcome.qa.up == outcome.primary.result.success) {
            down.addClass("disabled");
          }
          */
            down.addClass("disabled");
          } else {
            down.css("cursor", "pointer");
          }

          if (outcome.supplement.active && outcome.supplement.type == "d6") {
            const adjust = result.find(
              '.adjustDie[data-adjust="setFace"][data-type="qa"]',
            );
            if (
              outcome.qa.remaining == 0 ||
              outcome.qa.spent > 0 ||
              outcome.demerit.spent > 0
            ) {
              adjust.addClass("disabled");
            }
          }
        } else {
          result.find('.adjustDie[data-type="qa"]').addClass("disabled");
        }

        if (outcome.supplement.active && outcome.supplement.type == "d6") {
          const adjust = result.find(
            '.adjustDie[data-adjust="setFace"][data-type="demerit"]',
          );
          if (
            outcome.demerit.remaining < 3 ||
            outcome.qa.spent > 0 ||
            outcome.demerit.spent > 0
          ) {
            adjust.addClass("disabled");
          }
        }

        part.find(".chatMessage").append(result);
        break;
      }

      case "d10": {
        const outcome = flags.outcome || {};
        outcome.qa.used = outcome.qa.spent + outcome.qa.up + outcome.qa.down;
        outcome.qa.remaining = outcome.qa.max - outcome.qa.used;
        outcome.demerit.used =
          (outcome.demerit.spent + outcome.demerit.up + outcome.demerit.down) *
          3;
        outcome.demerit.remaining = outcome.demerit.max - outcome.demerit.used;
        outcome.effective = {
          success: outcome.primary.result.autofail
            ? 0
            : outcome.primary.result.pip - outcome.burnout,
          chaos: outcome.primary.result.pip + outcome.burnout,
        };
        if (outcome.supplement.active) {
          const pip = outcome.supplement.result.pip;
          outcome.effective.success += outcome.primary.result.autofail
            ? 0
            : pip % 3 == 0
              ? pip / 3
              : 0;
          outcome.effective.chaos += [3, 6].includes(pip) ? 0 : 1;
        }
        outcome.effective.success =
          outcome.effective.success < 0 ? 0 : outcome.effective.success;
        if (outcome.unl3ash) {
          outcome.effective.success = 7;
        }

        if ((outcome.primary.result.message ?? "") == "") {
          let msg;
          if (outcome.effective.success > 0) {
            msg = game.i18n.localize("TA.Chat.AbilitySuccess");
            msg = msg.replace("[success]", outcome.effective.success);
          } else {
            msg = game.i18n.localize("TA.Chat.AbilityFailure");
          }
          msg = msg.replace("[chaos]", outcome.effective.chaos);
          outcome.primary.result.message = msg;
        }

        if (flags.ability && flags.ability.outcomes && !outcome.unl3ash) {
          outcome.abilityMessage = this.anomalyOutcomes(
            flags.ability.outcomes,
            outcome.effective.success,
            outcome.primary.result.triscendence,
          );
        }

        let result = $(
          await foundry.applications.handlebars.renderTemplate(
            flags.template,
            outcome,
          ),
        );
        // disable adjust options with insufficient points
        if (outcome.demerit.active) {
          const adjust = result.find('.adjustDie[data-adjust="demerit"]');

          const up = adjust.find('i[data-adjust="up"]');
          if (outcome.primary.result.pip == 10) {
            up.addClass("disabled");
          } else if (
            outcome.demerit.remaining < 3 &&
            outcome.demerit.down == 0
          ) {
            up.addClass("disabled");
          } else {
            up.css("cursor", "pointer");
          }

          const down = adjust.find('i[data-adjust="down"]');
          if (outcome.primary.result.pip == 1) {
            down.addClass("disabled");
          } else if (outcome.demerit.remaining < 3 && outcome.demerit.up == 0) {
            down.addClass("disabled");
          } else {
            down.css("cursor", "pointer");
          }

          if (outcome.supplement.active && outcome.supplement.type == "d6") {
            const adjust = result.find(
              '.adjustDie[data-adjust="setFace"][data-type="demerit"]',
            );
            if (
              outcome.demerit.remaining < 3 ||
              outcome.qa.spent > 0 ||
              outcome.demerit.spent > 0
            ) {
              adjust.addClass("disabled");
            }
          }
        } else {
          result.find('.adjustDie[data-type="demerit"]').addClass("disabled");
        }

        if (outcome.qa.active) {
          const adjust = result.find('.adjustDie[data-adjust="qa"]');

          const up = adjust.find('i[data-adjust="up"]');
          if (outcome.primary.result.pip == 10) {
            up.addClass("disabled");
          } else if (outcome.qa.remaining == 0 && outcome.qa.down == 0) {
            up.addClass("disabled");
          } else {
            up.css("cursor", "pointer");
          }

          const down = adjust.find('i[data-adjust="down"]');
          if (outcome.primary.result.pip == 1) {
            down.addClass("disabled");
          } else if (outcome.qa.remaining == 0 && outcome.qa.up == 0) {
            down.addClass("disabled");
          } else {
            down.css("cursor", "pointer");
          }

          if (outcome.supplement.active && outcome.supplement.type == "d6") {
            const adjust = result.find(
              '.adjustDie[data-adjust="setFace"][data-type="qa"]',
            );
            if (
              outcome.qa.remaining == 0 ||
              outcome.qa.spent > 0 ||
              outcome.demerit.spent > 0
            ) {
              adjust.addClass("disabled");
            }
          }
        } else {
          result.find('.adjustDie[data-type="qa"]').addClass("disabled");
        }

        part.find(".chatMessage").append(result);
        break;
      }
    }

    $(html).find(".message-content").append(part);
  }

  anomalyOutcomes(outcomes, success, triscendence) {
    if (outcomes.length == 0) {
      return "";
    }
    if (!(this.author.isSelf || game.user.isGM)) {
      return "";
    }
    if (success == 0) {
      return game.i18n.localize("Ta.Chat.AbilityFailure");
    }

    const config = game.ta.config.outcomes;
    outcomes.sort((a, b) => config[a].order - config[b].order);

    const results = [];
    results.push(game.i18n.localize("Ta.Chat.AbilitySuccess"));

    outcomes.forEach((effect) => {
      switch (effect) {
        case "success":
          break; // already handled in the result setup

        case "spend3s": {
          results.push(
            "<b>" +
              game.i18n.localize(config[effect].name) +
              "</b> " +
              (triscendence
                ? "3 " +
                  game.i18n.localize("Ta.Chat.AbilityOrMore") +
                  " " +
                  game.i18n.localize("Ta.Chat.AbilityTimes")
                : success +
                  " " +
                  game.i18n.localize(
                    "Ta.Chat.AbilityTime" + (success > 1 ? "s" : ""),
                  )),
          );
          break;
        }

        case "eachplus3": {
          const times = success - 1;
          if (times == 0) {
            break;
          }

          results.push(
            "<b>" +
              game.i18n.localize(config[effect].name) +
              "</b> " +
              (triscendence
                ? "2 " +
                  game.i18n.localize("Ta.Chat.AbilityOrMore") +
                  " " +
                  game.i18n.localize("Ta.Chat.AbilityTimes")
                : times +
                  " " +
                  game.i18n.localize(
                    "Ta.Chat.AbilityTime" + (times > 1 ? "s" : ""),
                  )),
          );
          break;
        }

        case "triscendence": {
          if (triscendence) {
            results.push(
              "<b>" + game.i18n.localize(config[effect].name) + "</b>",
            );
          }
          break;
        }

        case "every3rd3": {
          const times = Math.floor(success / 3);
          if (times == 0) {
            break;
          }

          results.push(
            "<b>" +
              game.i18n.localize(config[effect].name) +
              "</b> " +
              (triscendence
                ? "1 " +
                  game.i18n.localize("Ta.Chat.AbilityOrMore") +
                  " " +
                  game.i18n.localize("Ta.Chat.AbilityTimes")
                : times +
                  " " +
                  game.i18n.localize(
                    "Ta.Chat.AbilityTime" + (times > 1 ? "s" : ""),
                  )),
          );
          break;
        }

        case "sixplus3s": {
          if (!triscendence && success < 6) {
            break;
          }

          results.push(
            (triscendence
              ? game.i18n.localize("Ta.Chat.AbilityPotentially") + " "
              : "") +
              "<b>" +
              game.i18n.localize(config[effect].name) +
              "</b> ",
          );
          break;
        }
      }
    });

    let result = "";
    for (let i = 0; i < results.length; i++) {
      if (i > 0) {
        result += ", ";
      }
      if (results.length > 1 && i == results.length - 1) {
        result += game.i18n.localize("Ta.Chat.And") + " ";
      }
      result += results[i];
    }

    return result + ".";
  }
}

class taAgentSheet extends foundry.appv1.sheets.ActorSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "actor"],
      width: 780,
      height: 950,
      resizable: true,
      tabs: [
        {
          navSelector: ".tabbed",
          contentSelector: ".tab-content",
          initial: "profile",
        },
        {
          navSelector: ".anomaly-nav",
          contentSelector: ".anomaly-content",
          initial: "",
        },
        {
          navSelector: ".requisition-nav",
          contentSelector: ".requisition-content",
          initial: "",
        },
        {
          navSelector: ".relationships-nav",
          contentSelector: ".relationships-content",
          initial: "",
        },
      ],
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/actor-agent-sheet.hbs";
  }

  /** @override */
  async getData(options) {
    const data = this.actor.system;

    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.actor.system,
      isGM: game.user.isGM,
      //config: CONFIG.TA,
      extra: this.actor.extra || {},
      editable: !this.actor.system.lock,
    });

    context.extra.manualStanding = game.ta.settings.manualStanding;
    let standing =
      data.agency.career.demerits > 10 ? 10 : data.agency.career.demerits;
    if (context.extra.manualStanding) {
      standing = data.agency.standing;
    }
    context.extra.standing = game.i18n.localize("TA.Standing" + standing);

    context.extra.playerExtra = game.user.isGM || game.ta.settings.playerExtra;
    context.extra.playerPlaywallTracks =
      game.user.isGM || game.ta.settings.playerPlaywallTracks;

    /*
    **********************************************************
    QAs
    **********************************************************
    */

    context.extra.qas = Object.keys(data.qa)
      .map((qa) => {
        return {
          qa: qa,
          name: game.i18n.localize("TA.Quality." + qa),
          data: data.qa[qa],
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    /*
    **********************************************************
    MISSION OBJECTIVES
    **********************************************************
    */
    const mission = await game.ta.helpers.taHelper.currentMission();
    if (mission) {
      const objectives = mission.system.objectives;
      context.extra.missionObjectives = Object.values(objectives).map(
        (obj) => obj.display,
      );
    }

    /*
    **********************************************************
    ANOMALY
    **********************************************************
    */
    if (data.anomaly.type != "") {
      context.extra["anomaly"] = {};
      context.extra.anomaly.name = data.anomaly.name;

      const abilities = this.actor.items
        .filter((item) => item.type === "AnomalyAbility")
        .sort((a, b) => a.name.localeCompare(b.name));
      const work = [];

      abilities.forEach(async (item) => {
        const improvement = item.system.improvement;
        const qas = data.qa;
        const ability = {
          id: item.id,
          name: item.name,
          reference: item.system.reference,
          practiced: improvement.practiced,
          canImprove: improvement.question != "",
          improvement: {
            visible: improvement.visible,
            showReview: improvement.visible,
            question: improvement.question,
          },
          rendered: "",
        };

        const review = ability.improvement;
        review.answers = {};

        const answers = item.system.improvement.answers;
        Object.keys(answers)
          .sort()
          .forEach(async (answer) => {
            review.answers[answer] = {
              text: answers[answer].text,
            };
            const track = answers[answer].track;
            track.id = item.id;
            track.name = answer;
            track.milestones[String(track.size)] = answers[answer].nextStage;

            review.answers[answer].track =
              await game.ta.helpers.taHelper.renderTrack({
                track: track,
                columns: track.size,
                startIcon: "&#9654;",
                render: true,
                showMilestoneContent: true,
                renderOptions: {
                  trackClass: CONFIG.TA.aspects.anomaly.colorClass,
                  trackType: "anomaly",
                  boxClass: "peerreview",
                },
              });
          });

        ability.rendered = await game.ta.helpers.taHelper.renderAnomalyAbility({
          ability: item,
          qas: qas,
          anomaly: data.anomaly.name,
          actionable: true,
          showTitle: false,
        });

        work.push(ability);
      });
      context.extra.anomaly.abilities = work;
    }

    /*
    **********************************************************
    create the Work/Life tracks
    **********************************************************
    */

    const worklife = {};
    ["anomaly", "reality", "competency"].forEach(async (aspect) => {
      if (data[aspect].type != "") {
        const track = data[aspect].workLife;
        track.size = 30;
        track.milestones = CONFIG.TA.playwall[aspect].worklife;
        worklife[aspect] = await game.ta.helpers.taHelper.renderTrack({
          track: track,
          columns: 15,
          canstrike: true,
          startIcon: "&#9654;",
          render: true,
          showMilestoneContent: true,
          renderOptions: {
            trackClass: CONFIG.TA.aspects[aspect].colorClass,
            trackType: aspect,
            boxClass: "worklife",
          },
        });
      }
    });
    context.extra.worklife = worklife;

    /*
    **********************************************************
    REALITY
    **********************************************************
    */

    if (data.reality.type != "") {
      const reality = await fromUuid(data.reality.type);
      context.extra["reality"] = {};
      context.extra.reality.name = reality.name;
      context.extra.reality.system = reality.system;
      const track = reality.system.realityTrigger.track;

      track.value = data.reality.triggerValue;
      context.extra.triggerTrack = await game.ta.helpers.taHelper.renderTrack({
        track: track,
        columns: 5,
        showMilestoneContent: true,
        canstrike: false,
        startIcon: "&#9654;",
        render: true,
        canaction: true,
        renderOptions: {
          trackClass: CONFIG.TA.aspects.reality.colorClass + " center",
          trackType: "reality",
          boxClass: "realitytrigger",
        },
      });
    }

    /*
    **********************************************************
    COMPETENCY
    **********************************************************
    */

    if (data.competency.type != "") {
      const competency = await fromUuid(data.competency.type);
      context.extra["competency"] = {};
      context.extra.competency.name = competency.name;
      context.extra.competency.system = competency.system;

      context.extra.primeDirectiveBlurb = competency.system.primeDirectiveBlurb;
      context.extra.sanctionedBehaviors = competency.system.sanctionedBehaviors;
    }

    // REQUISITIONS
    const requisitions = this.actor.items
      .filter((item) => item.type === "Requisition")
      .sort((a, b) => a.name.localeCompare(b.name));
    requisitions.forEach(async (requisition) => {
      if (!requisition.unlimited) {
        requisition.trackDisplay = await game.ta.helpers.taHelper.renderTrack({
          track: {
            id: requisition.id,
            value: requisition.system.used,
            size: requisition.system.missionUses,
          },
          columns: requisition.system.missionUses,
          canstrike: false,
          startIcon: "&#9654;",
          render: true,
          canaction: true,
          renderOptions: {
            trackClass: CONFIG.TA.aspects.competency.colorClass + " center",
            trackType: "competency",
            boxClass: "requisition-box",
          },
        });
      }
    });
    context.extra.requisitions = requisitions;

    // RELATIONSHIPS
    const relationships = Object.values(data.reality.relationships).sort(
      (a, b) => a.name.localeCompare(b.name),
    );
    context.extra.relationships = relationships;
    context.extra.networkSize = 0;
    relationships.forEach(async (relationship) => {
      relationship.active = relationship.network || relationship.active;
      relationship.bonusName = game.i18n.localize("TA.Agent.ConnectionBonus");
      if (relationship.bonus != "") {
        const benefit = game.items.get(relationship.bonus);
        if (benefit) {
          relationship.bonusName = benefit.name;
          relationship.bonusDescription = benefit.system.description;
        }
      }

      relationship.track.id = relationship.id;
      if (relationship.network) {
        context.extra.networkSize += 1;
      }

      switch (relationship.type) {
        case "relationship": {
          relationship.typeDisplay = game.i18n.localize("TA.Agent.Connection");
          relationship.typeContext = "reality";
          relationship.track.milestones["9"] =
            '<i class="fa-solid fa-globe fa-lg" style="vertical-align: middle; margin: auto"></i>';
          break;
        }
        case "fugitive": {
          relationship.typeDisplay = game.i18n.localize("TA.Agent.Connection");
          relationship.typeContext = "anomaly";
          relationship.track.milestones["9"] =
            '<i class="fa-solid fa-bolt fa-lg" style="vertical-align: middle; margin: auto"></i>';
          break;
        }
        case "tether": {
          relationship.typeDisplay = game.i18n.localize("TA.Agent.Tether");
          relationship.typeContext = "reality";
          relationship.track.milestones["30"] =
            '<i class="fa-solid fa-thumbtack fa-lg" style="vertical-align: middle; margin: auto"></i>';
          break;
        }
      }

      relationship.trackDisplay = await game.ta.helpers.taHelper.renderTrack({
        track: relationship.track,
        columns: relationship.type == "tether" ? 15 : 9,
        canstrike: false,
        startIcon: "&#9654;",
        render: true,
        canaction: true,
        showMilestoneContent: true,
        renderOptions: {
          trackClass: CONFIG.TA.aspects[relationship.typeContext].colorClass,
          trackType: "reality",
          boxClass: "connection-box",
        },
      });
    });
    context.extra.canTether = Object.keys(
      data.achievements["reality"],
    ).includes("V2");
    context.extra.canSeek = Object.keys(data.achievements["anomaly"]).includes(
      "H3",
    );
    context.extra.RelationshipOptions =
      context.extra.canTether || context.extra.canSeek;

    context.extra.users = {};
    for (const user of game.users.players.sort((a, b) =>
      a.name.localeCompare(b.name),
    )) {
      context.extra.users[user.name] = user.name;
    }
    context.extra.users["GM"] = "GM";

    /*
    **********************************************************
    PLAYWALL
    **********************************************************
    */
    context.extra.playwall = {};
    Object.keys(data.achievements).forEach((aspect) => {
      context.extra.playwall[aspect] = Object.keys(data.achievements[aspect])
        .sort()
        .join(", ");
    });
    context.extra.showPlaywallButton = data.allPlaywall.length > 0;

    /*
    **********************************************************
    NOTES
    **********************************************************
    */

    const timeline = {};
    for (let i = 1; i <= 30; i++) {
      timeline[i] = i;
    }

    context.extra.timeTrack = await game.ta.helpers.taHelper.renderTrack({
      track: {
        id: "time",
        name: "Time",
        size: 30,
        value: data.agency.time,
        milestones: timeline,
      },
      columns: 30,
      render: true,
      startIcon: "&#9654;",
      showMilestoneContent: true,
      canaction: true,
      renderOptions: {
        trackClass: "color-purple",
        trackType: "timetrack",
        boxClass: "timebox",
        highlightMilestones: false,
      },
    });

    return context;
  }

  /** @override **/
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);
    return html;
  }

  /** @override */
  async close(options = {}) {
    await super.close(options);
    if (game.user.isGM && !this.actor.system.lock) {
      this.actor.update({ "system.lock": true });
    }
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    html.find(".qa-pips").click(this._listenSetQAPip.bind(this));
    html
      .find("#conflictResolution")
      .click(this._listenConflictResolution.bind(this));
    html.find("#lifeInsurance").click(this._listenLifeInsurance.bind(this));
    html.find(".qa-check").click(this._listenQualityCheck.bind(this));
    html
      .find(".realitytrigger.track-box.track-action")
      .click(this._listenRealityTrigger.bind(this));
    html
      .find(".connectionBonusAction.context-clickable")
      .click(this._listenConnectionBonusAction.bind(this));
    html
      .find(".requisition-box.track-action")
      .click(this._listenRequisitionUse.bind(this));
    html.find("#showPlaywall").click(this._listenShowPlaywall.bind(this));
    html.find(".gotoPlaywall").click(this._listenGotoPlaywall.bind(this));
    html.find(".specialDice").click(this._listenSpecialDice.bind(this));
    html
      .find(".abilitytrack.track-action")
      .click(this._listenAbilityTrack.bind(this));
    html
      .find(".recordPerformance")
      .change(this._listenRecordPerformance.bind(this));
    html
      .find(".requisitionNote")
      .change(this._listenRequisitionNote.bind(this));
    html.find(".qacurr").change(this._listenQACurrent.bind(this));
    html
      .find(".togglePeerReview")
      .click(this._listenTogglePeerReview.bind(this));
    html.find(".timebox.track-action").click(this._listenTimeTrack.bind(this));

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find("#resetQAs").click(this._listenResetQAs.bind(this));
    html
      .find(".worklife.track-box.track-action")
      .click(this._listenWorklife.bind(this));
    html
      .find(".delete-requisition")
      .click(this._listenDeleteRequisition.bind(this));
    html
      .find(".add-relationship")
      .click(this._listenAddRelationship.bind(this));
    html
      .find(".delete-relationship")
      .click(this._listenDeleteRelationship.bind(this));
    html
      .find(".connection-box.track-action")
      .click(this._listenConnectionTrack.bind(this));
    html.find(".setPracticed").change(this._listenSetPracticed.bind(this));
    html.find(".delete-ability").click(this._listenDeleteAbility.bind(this));
    html
      .find(".peerreview.track-action")
      .click(this._listenPeerReview.bind(this));
    html
      .find("#togglePlaywallLock")
      .click(this._listenTogglePlaywallLock.bind(this));
    //html.find("#resyncPaywall").click(this._listenResyncPlaywall.bind(this));
    html.find(".qamax").change(this._listenQAMax.bind(this));
    html
      .find(".playwallReference")
      .change(this._listenPlaywallReferenceChange.bind(this));
    html
      .find(".showBystander")
      .click(this._listenAssociatedBystander.bind(this));
    html.find(".playedby").change(this._listenPlayedBy.bind(this));
  }

  async _listenPlayedBy(event) {
    event.preventDefault();
    const relationshipId = event.currentTarget.dataset.relationshipid;
    const playerName = event.currentTarget.value;
    const update = {};
    const relationship =
      this.actor.system.reality.relationships[relationshipId];

    if (relationship.bystanderId) {
      // set the Bystander permissions, if necessary
      const bystander = game.actors.get(relationship.bystanderId);
      if (bystander) {
        if (relationship.playedby && relationship.playedby != "GM") {
          const player = game.users.getName(relationship.playedby);
          if (player) {
            game.ta.helpers.taHelper.setObjectPermissions(
              "Actor",
              relationship.bystanderId,
              player.id,
              null,
            );
          }
        }
        if (playerName != "GM") {
          const player = game.users.getName(playerName);
          if (player) {
            game.ta.helpers.taHelper.setObjectPermissions(
              "Actor",
              relationship.bystanderId,
              player.id,
              CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER,
            );
          }
        }
      }
    }
    //console.log(relationship)

    update["system.reality.relationships." + relationshipId + ".playedby"] =
      playerName;
    this.actor.update(update);
  }

  async _listenAssociatedBystander(event) {
    event.preventDefault();
    const relationshipId = event.currentTarget.dataset.relationship;
    if (!relationshipId) {
      return;
    }
    const relationship =
      this.actor.system.reality.relationships[relationshipId];
    let bystanderId = event.currentTarget.dataset.bystander;

    if (bystanderId) {
      const bystander = await game.actors.get(bystanderId);
      if (bystander) {
        bystander.sheet.render(true);
        return;
      } else {
        const update = {};
        update[
          "system.reality.relationships." + relationshipId + ".bystanderId"
        ] = null;
        this.actor.update(update);
        bystanderId = null;
      }
    }

    const buttons = [
      {
        action: "create",
        label: game.i18n.localize("TA.Agent.BystanderCreate"),
      },
      {
        action: "cancel",
        label: game.i18n.localize("TA.Action.Cancel"),
      },
    ];

    // check if there is an existing Bystander with the same name
    bystanderId = null;
    if (relationship.name != "Relationship") {
      const matches = game.actors.filter(
        (actor) =>
          actor.type === "Bystander" && actor.name == relationship.name,
      );
      if (matches.length > 0) {
        bystanderId = matches[0].id;
        buttons.unshift({
          action: "match",
          label: game.i18n.localize("TA.Agent.BystanderMatch"),
        });
      } else {
        bystanderId = null;
      }
    }

    let player = game.users.getName(relationship.playedby);
    if (player) {
      player = player.id;
    } else {
      player = null;
    }

    new foundry.applications.api.DialogV2({
      window: { title: game.i18n.localize("TA.Dialog.Notification") },
      modal: true,
      content: bystanderId
        ? game.i18n.localize("TA.Agent.BystanderMatched")
        : game.i18n.localize("TA.Agent.BystanderUnmatched"),
      position: {
        width: 600,
      },
      buttons: buttons,
      submit: (result) => {
        switch (result) {
          case "match": {
            const update = {};
            update[
              "system.reality.relationships." + relationshipId + ".bystanderId"
            ] = bystanderId;
            this.actor.update(update);
            // set permissions
            if (relationship.playedby != "GM") {
              if (player && game.user.isGM) {
                const permission = {};
                permission["ownership." + player] =
                  CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;
                const npc = game.actors.get(bystanderId);
                npc.update(permission);
              }
            }
            game.actors.get(bystanderId).sheet.render(true);
            break;
          }

          case "create": {
            const params = {
              name: relationship.name,
              type: "Bystander",
              "system.description": relationship.description,
            };
            if (player && game.user.isGM) {
              params["ownership." + player] =
                CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;
            }

            const bystander = Actor.create(params);
            bystander.then((result) => {
              const update = {};
              update[
                "system.reality.relationships." +
                  relationshipId +
                  ".bystanderId"
              ] = result.id;
              this.actor.update(update);
              game.actors.get(result.id).sheet.render(true);
            });
            break;
          }
        }
      },
    }).render({ force: true });
  }

  async _listenTimeTrack(event) {
    event.preventDefault();
    const value = Number(event.currentTarget.dataset.value);
    event.currentTarget.parentElement.dataset.type;
    const track = this.actor.system.agency.time;
    const update = {};

    if (value == track) {
      // unselect value
      update["system.agency.time"] = value - 1;
    } else if (value == track + 1) {
      // select new value
      update["system.agency.time"] = value;
    }
    this.actor.update(update);
  }

  async _listenPlaywallReferenceChange(event) {
    event.preventDefault();
    const oldSet = new Set(
      event.target.dataset.list
        .split(/\s*[,;]\s*/)
        .filter((item) => item != ""),
    );
    const newSet = new Set(
      event.target.value.split(/\s*[,;]\s*/).filter((item) => item != ""),
    );
    const added = [...newSet].filter((item) => !oldSet.has(item));
    const deleted = [...oldSet].filter((item) => !newSet.has(item));

    // adds
    for (let pw of added) {
      const journal = game.ta.helpers.taHelper.playwallPage(pw);
      if (journal.page) {
        const page = game.journal.get(journal.journal).pages.get(journal.page);
        let context = page.system.aspect;
        this.actor.addPlaywall(pw, context, {});
      }
    }

    // deletes
    for (let pw of deleted) {
      this.actor.removePlaywall(pw);
    }
  }

  async _listenRequisitionNote(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const requisition = this.actor.items.get(id);
    if (requisition) {
      const value = event.target.value;
      requisition.update({ "system.notes": value });
    }
  }

  async _listenRecordPerformance(event) {
    const actor = this.actor;
    const context = event.target.dataset.context;
    const old = Number(event.target.dataset.old);
    const value = Number(event.target.value);
    const update = {};

    if (value > old) {
      update["system.mission." + context] =
        Number(actor.system.mission[context]) + value - old;
    }
    if (value > Number(actor.system.agency.career[context])) {
      update["system.agency.career." + context] = value;
    }
    actor.update(update);
  }

  async _listenAbilityTrack(event) {
    event.preventDefault();
    const context = event.currentTarget.dataset;
    const value = Number(context.value);
    const ability = this.actor.items.get(context.id);
    const track = ability.system.track;

    const update = {};
    if (value == track.value) {
      // unselect value
      update["system.track.value"] = value - 1;
    } else if (value == track.value + 1) {
      // select new value
      update["system.track.value"] = value;
    }
    ability.update(update);
  }

  async _listenSpecialDice(event) {
    event.preventDefault();
    const target = $(event.target);
    const parent = $(event.currentTarget);
    const type = target.data("type");
    if (!type) {
      return;
    }

    if (type == "d20") {
      game.ta.helpers.taDice.rollD20({
        actor: this.actor,
        quality: null,
        supplement: null,
        burnout: 0,
      });
    } else if (type != "d8") {
      if (target.hasClass("blink")) {
        target.removeClass("blink");
        parent.data(type, false);
      } else {
        target.addClass("blink");
        parent.data(type, true);
      }
    }
  }

  async _listenQACurrent(event) {
    event.preventDefault();
    const target = event.target;
    const data = this.actor.system;
    const quality = target.dataset.quality;
    const update = {};
    if (target.value > data.qa[quality].max) {
      target.value = data.qa[quality].max;
    }
    update["system.qa." + quality + ".value"] = Number(target.value);
    this.actor.update(update);
  }

  async _listenQAMax(event) {
    event.preventDefault();
    const target = event.target;
    const data = this.actor.system;
    const quality = target.dataset.quality;
    const update = {};
    update["system.qa." + quality + ".max"] = Number(target.value);
    if (data.qa[quality].value > target.value) {
      update["system.qa." + quality + ".value"] = Number(target.value);
    }
    this.actor.update(update);
  }

  async _listenShowPlaywall(event) {
    event.preventDefault();
    game.ta.helpers.taHelper.togglePlaywall();
  }

  async _listenGotoPlaywall(event) {
    event.preventDefault();
    const playwall = event.target.dataset.playwall;
    game.ta.helpers.taHelper.gotoPlaywall(playwall);
  }

  async _listenTogglePlaywallLock(event) {
    event.preventDefault();
    const status = this.actor.system.achievementsLocked;
    this.actor.update({
      "system.achievementsLocked": !status,
    });
  }

  async _listenPeerReview(event) {
    event.preventDefault();
    const context = event.currentTarget.dataset;
    const value = Number(context.value);
    const ability = this.actor.items.get(context.id);
    const track = ability.system.improvement.answers[context.name].track;
    const playwall = track.milestones[String(value)];

    const update = {};
    const actorUpdate = {};
    if (value == track.value) {
      // unselect value
      update["system.improvement.answers." + context.name + ".track.value"] =
        value - 1;
      if (playwall) {
        //actorUpdate["system.achievements.anomaly.-=" + playwall] = null;
        game.ta.helpers.taHelper.removePlaywall(this.actor.id, playwall);
        //this.actor.removePlaywall(playwall);
      }
    } else if (value == track.value + 1) {
      // select new value
      update["system.improvement.answers." + context.name + ".track.value"] =
        value;
      if (playwall) {
        //actorUpdate["system.achievements.anomaly." + playwall] = {};
        game.ta.helpers.taHelper.addPlaywall(
          this.actor.id,
          playwall,
          "anomaly",
          {},
        );
        //this.actor.addPlaywall(playwall, "anomaly", {});
      }
    }
    ability.update(update);
    this.actor.update(actorUpdate);
  }

  async _listenTogglePeerReview(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    const ability = this.actor.items.get(id);
    ability.update({
      "system.improvement.visible": !ability.system.improvement.visible,
    });
  }

  async _listenDeleteAbility(event) {
    event.preventDefault();

    const proceed = await foundry.applications.api.DialogV2.confirm({
      window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
      content: game.i18n.localize("TA.Dialog.DeleteConfirm"),
      rejectClose: false,
      modal: true,
    });

    if (proceed) {
      const id = event.target.dataset.id;
      const playwall = this.actor.items.get(id).system.reference;
      if (playwall == "") {
        this.actor.deleteEmbeddedDocuments("Item", [id]);
      } else {
        this.actor.removePlaywall(playwall);
      }
    }
  }

  async _listenSetPracticed(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const state = event.target.checked;
    const ability = this.actor.items.get(id);
    ability.update({
      "system.improvement.practiced": state,
    });
  }

  async _listenRequisitionUse(event) {
    event.preventDefault();
    const data = event.currentTarget.dataset;
    const value = Number(data.value);
    const id = data.id;
    const requisition = this.actor.items.get(id);
    const uses = requisition.system.used;

    if (value == uses) {
      // unselect value
      requisition.update({ "system.used": value - 1 });
    } else if (value == uses + 1) {
      // select new value
      requisition.update({ "system.used": value });
    }
  }

  async _listenConnectionTrack(event) {
    event.preventDefault();
    const value = Number(event.currentTarget.dataset.value);
    const id = event.currentTarget.dataset.id;
    const relationship = this.actor.system.reality.relationships[id];
    const trackValue = relationship.track.value;
    const update = {};
    const updatePath = "system.reality.relationships." + id;

    if (value == trackValue) {
      // unselect value
      update[updatePath + ".track.value"] = value - 1;
      if (
        relationship.type == "relationship" &&
        value - 1 == relationship.track.size - 1
      ) {
        update[updatePath + ".network"] = false;
      }
    } else if (value == trackValue + 1) {
      // select new value
      update[updatePath + ".track.value"] = value;
      update[updatePath + ".active"] = true;
      if (
        relationship.type == "relationship" &&
        value == relationship.track.size
      ) {
        update[updatePath + ".network"] = true;
      }
    }
    this.actor.update(update);
  }

  async _listenConnectionBonusAction(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    const relationship = this.actor.system.reality.relationships[id];

    let msg = game.i18n.localize("TA.Agent.ActivateConnectionBonus");
    msg = msg.replaceAll("[relationship]", relationship.name);
    msg = msg.replaceAll("[bonus]", event.currentTarget.innerText);
    msg = "<span>" + msg + "</span>";

    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flags: {
        ta: {
          message: msg,
        },
      },
    });

    const update = {};
    update["system.reality.relationships." + id + ".active"] = false;
    this.actor.update(update);
  }

  async _listenDeleteRelationship(event) {
    event.preventDefault();
    const proceed = await foundry.applications.api.DialogV2.confirm({
      window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
      content:
        '<div style="text-align: center">' +
        game.i18n.localize("TA.Dialog.DeleteConfirm") +
        "</div>",
      rejectClose: false,
      modal: true,
    });

    if (proceed) {
      const update = {};
      update["system.reality.relationships.-=" + event.target.dataset.id] =
        null;
      this.actor.update(update);
    }
  }

  async _listenAddRelationship(event) {
    event.preventDefault();
    const update = {};
    const type = event.target.dataset.type;
    const id = foundry.utils.randomID();
    const track = foundry.utils.deepClone(game.ta.config.templates.track);

    let name = "";
    switch (type) {
      case "relationship": {
        name = game.i18n.localize("TA.Agent.Relationship");
        track.size = 9;
        track.milestones = { 9: "Network" };
        break;
      }
      case "tether": {
        name = game.i18n.localize("TA.Agent.Tether");
        track.size = 30;
        track.milestones = { 30: "Permanent" };
        break;
      }
      case "fugitive": {
        name = game.i18n.localize("TA.Agent.FugitiveAnomaly");
        track.size = 9;
        track.milestones = { 9: "Ability" };
        break;
      }
    }

    update["system.reality.relationships." + id] = {
      id: id,
      name: name,
      description: "",
      track: track,
      active: false,
      network: false,
      type: type,
      hasBenefit: type == "relationship",
      bonus: "",
      bystanderId: null,
      playedby: "GM",
    };
    this.actor.update(update);
  }

  async _listenRealityTrigger(event) {
    event.preventDefault();
    const value = Number(event.currentTarget.dataset.value);
    event.currentTarget.parentElement.dataset.type;
    const track = this.actor.system.reality.triggerValue;
    const update = {};

    if (value == track) {
      // unselect value
      update["system.reality.triggerValue"] = value - 1;
    } else if (value == track + 1) {
      // select new value
      update["system.reality.triggerValue"] = value;
    }
    this.actor.update(update);
  }

  async _listenDeleteRequisition(event) {
    event.preventDefault();

    const proceed = await foundry.applications.api.DialogV2.confirm({
      window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
      content: game.i18n.localize("TA.Dialog.DeleteConfirm"),
      rejectClose: false,
      modal: true,
    });

    if (proceed) {
      const id = event.target.dataset.id;
      this.actor.deleteEmbeddedDocuments("Item", [id]);
    }
  }

  async _listenWorklife(event) {
    event.preventDefault();
    const value = Number(event.currentTarget.dataset.value);
    const context = event.currentTarget.parentElement.dataset.type;
    const worklife = this.actor.system[context].workLife;
    const playwall = game.ta.config.playwall[context].worklife[String(value)];
    const update = {};

    if (value == worklife.value) {
      // unselect value
      update["system." + context + ".workLife.value"] = value - 1;
      if (playwall) {
        game.ta.helpers.taHelper.removePlaywall(this.actor.id, playwall);
        //this.actor.removePlaywall(playwall)
      }
    } else if (31 - value == worklife.strikes) {
      // unselect strike
      update["system." + context + ".workLife.strikes"] = worklife.strikes - 1;
    } else if (
      value == worklife.value + 1 &&
      31 - value == worklife.strikes + 1
    ) {
      // last box left
      new foundry.applications.api.DialogV2({
        window: { title: game.i18n.localize("TA.Dialog.Notification") },
        modal: true,
        content:
          '<div class="center">Do you want this box to be checked or struck?</div>',
        buttons: [
          {
            action: "check",
            label: "Checked",
            default: true,
          },
          {
            action: "struck",
            label: "Struck",
          },
        ],
        submit: (result) => {
          switch (result) {
            case "check":
              update["system." + context + ".workLife.value"] = value;
              if (playwall) {
                game.ta.helpers.taHelper.addPlaywall(
                  this.actor.id,
                  playwall,
                  context,
                  {},
                );
                //this.actor.addPlaywall(playwall, context, {});
              }
              break;
            case "struck":
              update["system." + context + ".workLife.strikes"] =
                worklife.strikes + 1;
              break;
          }
          this.actor.update(update);
        },
      }).render({ force: true });
    } else if (value == worklife.value + 1) {
      // select new value
      update["system." + context + ".workLife.value"] = value;
      if (playwall) {
        game.ta.helpers.taHelper.addPlaywall(
          this.actor.id,
          playwall,
          context,
          {},
        );
        //this.actor.addPlaywall(playwall, context, {});
      }
    } else if (31 - value == worklife.strikes + 1) {
      // select new strike
      update["system." + context + ".workLife.strikes"] = worklife.strikes + 1;
    }
    this.actor.update(update);
  }

  async resolveDiceAction(dicetype, options) {
    const actorData = this.actor.system;
    const data = options.data;
    const quality = actorData.qa[options.quality];
    quality.id = options.quality;
    const burnout = this.actor.system.burnoutRelease
      ? 0
      : (quality.value == 0 ? 1 : 0) +
        this.actor.system.burnout +
        (data.action == "ata"
          ? Number(game.settings.get("triangleagency", "burnout"))
          : 0);

    let msg;

    switch (data.action) {
      case "ata": {
        // Ask the Agency
        msg = game.i18n.localize("TA.Agent.AskTheAgencyMsg");
        msg = msg.replaceAll(
          "[quality]",
          game.i18n.localize("TA.Quality." + data.qa),
        );
        game.ta.helpers.taDice.rollD4({
          actor: this.actor,
          quality: quality,
          supplement: undefined,
          burnout: burnout,
          message: msg,
          action: "ata",
        });
        break;
      }

      case "anomaly-ability": {
        // what it says on the tin
        const ability = this.actor.items.get(data.abilityid);
        console.log(ability);
        msg = game.i18n.localize("TA.Agent.UseAbilityMsg");
        msg = msg.replaceAll(
          "[quality]",
          game.i18n.localize("TA.Quality." + data.qa),
        );
        msg = msg.replaceAll("[anomaly]", data.anomaly);
        console.log(ability);
        msg = msg.replaceAll(
          "[ability]",
          `<a data-tooltip="${ability.name}" class="content-link" data-link data-uuid="${ability.uuid}">${ability.system.synopsis}</a>`,
        );
        if (ability.system.chat != "") {
          msg += "<div>" + ability.system.chat + "</div>";
        }

        let hasD6 = false;
        if (actorData.dice.d6) {
          hasD6 = $(this.form).find("#hasD6").hasClass("blink");
        }
        if (
          actorData.dice.d10 &&
          $(this.form).find("#hasD10").hasClass("blink")
        ) {
          game.ta.helpers.taDice.rollD10({
            actor: this.actor,
            quality: quality,
            supplement: hasD6 ? "d6" : undefined,
            burnout: burnout,
            message: msg,
            action: "anomaly",
            ability: ability,
          });
          $(this.form).find("#hasD10").removeClass("blink");
        } else {
          game.ta.helpers.taDice.rollD4({
            actor: this.actor,
            quality: quality,
            supplement: hasD6 ? "d6" : undefined,
            burnout: burnout,
            message: msg,
            action: "anomaly",
            ability: ability,
          });
        }

        if (hasD6) {
          $(this.form).find("#hasD6").removeClass("blink");
        }

        ability.update({ "system.improvement.practiced": true });
        break;
      }
    }

    if (this.actor.system.burnoutRelease) {
      this.actor.update({ "system.burnoutRelease": false });
    }
  }

  async _listenQualityCheck(event) {
    event.preventDefault();
    const data = event.currentTarget.dataset;

    this.resolveDiceAction("d4", {
      data: data,
      quality: data.qa,
    });
  }

  async _listenLifeInsurance(event) {
    event.preventDefault();
    //document.activeElement.blur();

    let msg =
      "<span>" + game.i18n.localize("TA.Agent.LifeInsuranceMsg") + "</span>";
    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flags: {
        ta: {
          message: msg,
        },
      },
    });

    this.actor.update({
      "system.agency.commendations": this.actor.system.agency.commendations - 5,
    });
  }

  async _listenConflictResolution(event) {
    event.preventDefault();

    const msg =
      '<p>Dynamic Retrocausal Probability Enhancement System Engaged:</p><div id="outcome"></div>';

    const pool = game.ta.helpers.taDice.rollGroup("d4", undefined);
    pool.primary.type = "conflict";

    const template =
      "systems/triangleagency/templates/part-conflict-outcome.hbs";

    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flags: {
        ta: {
          dice: "conflict",
          outcome: pool,
          template: template,
          message: msg,
        },
      },
    });
  }

  async _listenResetQAs(event) {
    event.preventDefault();
    //document.activeElement.blur();

    const updates = {};
    Object.keys(this.actor.system.qa).forEach((quality) => {
      const max = this.actor.system.qa[quality].max;
      if (this.actor.system.qa[quality].value != max) {
        updates["system.qa." + quality + ".value"] = max;
      }
    });
    this.actor.update(updates);
  }

  async _listenSetQAPip(event) {
    event.preventDefault();
    const quality = event.currentTarget.dataset.qa;
    let pip = Number(event.target.dataset.value);
    const currentPip = this.actor.system.qa[quality].value;

    if (isNaN(pip)) {
      return;
    }

    const updates = {};

    // can QAs go higher than max?
    const max = Number(this.actor.system.qa[quality].max);
    if (pip > max) {
      return;
    }
    // was the last pip clicked and active?
    if (pip == currentPip) {
      pip = pip - 1;
    }

    updates["system.qa." + quality + ".value"] = pip;
    this.actor.update(updates);
  }

  async _onDropItem(event, data) {
    const item = await fromUuid(data.uuid);
    const actor = this.actor;
    const updates = {};

    switch (item.type) {
      case "Anomaly": {
        // remove any previous anomaly data
        let abilities = this.actor.items
          .filter((item) => item.type === "AnomalyAbility")
          .map((item) => item.id);
        actor.deleteEmbeddedDocuments("Item", abilities);

        // add the default anomaly abilities
        const embeds = [];
        game.items
          .filter(
            (ability) =>
              ability.type === "AnomalyAbility" &&
              ability.system.anomaly == item.id &&
              ability.system.reference == "",
          )
          .forEach(async (ability) => {
            const newAbility = await foundry.utils.duplicate(ability);
            newAbility.flags.ta = {
              originalId: ability.id,
            };
            embeds.push(newAbility);
          });
        await actor.createEmbeddedDocuments("Item", embeds);

        updates["system.anomaly.name"] = item.name;
        updates["system.anomaly.type"] = data.uuid;
        actor.update(updates);
        break;
      }

      case "Reality":
        updates["system.reality.type"] = data.uuid;
        updates["system.reality.triggerValue"] = 0;
        actor.update(updates);
        break;

      case "Competency": {
        const competency = await fromUuid(data.uuid);
        updates["system.competency.type"] = data.uuid;
        updates["system.competency.primeDirective"] =
          item.system.primeDirective;

        // add the initial requisition
        if (competency.system.initialRequisition != "") {
          game.items.get(competency.system.initialRequisition);
          await actor.createEmbeddedDocuments("Item", [
            foundry.utils.duplicate(
              await game.items.get(competency.system.initialRequisition),
            ),
          ]);
        }
        actor.update(updates);
        break;
      }

      case "Requisition":
        // only one of distinct Requisition
        if (
          actor.items.filter(
            (doc) => doc.type == item.type && doc.name == item.name,
          ).length > 0
        ) {
          return;
        }
        await actor.createEmbeddedDocuments("Item", [
          await foundry.utils.duplicate(item),
        ]);
        break;

      case "ConnectionBenefit": {
        const connectionId = event.target.closest(".card")?.dataset.id;
        if (connectionId) {
          const relationship =
            this.actor.system.reality.relationships[connectionId];

          if (relationship.hasBenefit) {
            const benefit = await fromUuid(data.uuid);
            const update = {};
            update["system.reality.relationships." + connectionId + ".bonus"] =
              benefit.id;
            this.actor.update(update);
          }
        } else {
          foundry.ui.notifications.info(
            "Connection Benefits need to be dropped on an existing relationship.",
          );
        }
        break;
      }

      case "AnomalyAbility":
        // only one of each
        if (
          (
            await actor.items.filter(
              (doc) =>
                doc.type == item.type && doc.flags.ta.originalId == item.id,
            )
          ).length > 0
        ) {
          return;
        }
        if (item.system.reference != "") {
          this.actor.addPlaywall(item.system.reference, "anomaly", {});
        } else {
          const ability = await foundry.utils.duplicate(item);
          ability.flags.ta = {
            originalId: item.id,
          };
          await actor.createEmbeddedDocuments("Item", [ability]);
        }
        break;
    }
  }
}

class taActorAnomalySheet extends foundry.appv1.sheets.ActorSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "actor"],
      width: 800,
      height: 548,
      resizable: true,
      tabs: [
        {
          navSelector: ".tabbed",
          contentSelector: ".tab-content",
          initial: "anomaly",
        },
        {
          navSelector: ".chaos-nav",
          contentSelector: ".chaos-content",
          initial: "",
        },
      ],
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/actor-anomaly-sheet.hbs";
  }

  /** @override */
  async getData(options) {
    const data = this.actor.system;

    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.actor.system,
      //config: CONFIG.TA,
      extra: this.actor.extra || {},
      editable: !this.actor.system.lock,
    });

    context["domain-status"] =
      this.actor.name +
      " " +
      game.i18n.localize(
        data.indomain
          ? "TA.AnomalyDomainStatusIn"
          : "TA.AnomalyDomainStatusOut",
      );

    switch (data.type) {
      case "major":
        context["type-major-status"] = "-select";
        context["type-minor-status"] = "-unselect";
        context["type-name"] = game.i18n.localize("TYPES.Actor.Anomaly");
        break;
      case "minor":
        context["type-major-status"] = "-unselect";
        context["type-minor-status"] = "-select";
        context["type-name"] = game.i18n.localize("TA.MinorAnomaly");
        break;
    }

    const availableChaos = Number(
      game.settings.get("triangleagency", "chaos") || 0,
    );
    const effects = [];
    if (context.system.chaosEffects) {
      Object.entries(context.system.chaosEffects).forEach(([key, effect]) => {
        let cost = Number(effect.cost);
        if (data.indomain && !context.editable) {
          cost = cost <= 3 ? 0 : Math.ceil(cost / 3);
        }
        effects.push({
          id: key,
          name: effect.name,
          cost: cost,
          description: effect.description,
          available: cost <= availableChaos || context.editable,
        });
      });
    }
    effects.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
    context.extra.chaosEffects = effects;

    context.extra["stabilityTrack"] = [];
    for (let i = 1; i <= data.stability; i++) {
      context.extra.stabilityTrack.push(
        i <= data.currentStability ? true : false,
      );
    }

    //console.log(context);

    return context;
  }

  /** @override **/
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, true, this);

    // add extra buttons
    const header = html[0].querySelector(".window-header");
    const parser = new DOMParser();

    let edit =
      '<a class="control pintogmscreen" data-tooltip="' +
      game.i18n.localize("TA.GM.PinToScreen") +
      '"><i class="fa-solid fa-thumbtack"></i></a>';
    edit = parser.parseFromString(edit, "text/html").body.firstChild;
    edit.addEventListener("click", this._listenPinToGM.bind(this));
    edit.addEventListener("dblclick", (event) => event.stopPropagation());
    let firstButton = header.querySelector(".header-button");
    firstButton?.insertAdjacentElement("beforebegin", edit);

    return html;
  }

  /** @override */
  async close(options = {}) {
    await super.close(options);
    if (game.user.isGM && !this.actor.system.lock) {
      this.actor.update({ "system.lock": true });
    }
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    html.find(".indomain").change(this._listenSetInDomain.bind(this));
    html
      .find(".chaos-effect-activate")
      .click(this._listenActivateChaosEffect.bind(this));

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find(".AnomalyType").click(this._listenSetAnomalyType.bind(this));
    html
      .find("#stabilityTrack")
      .click(this._listenSetCurrentStability.bind(this));
    html.find("#stability").change(this._listenSetCurrentStability.bind(this));
    html
      .find(".chaos-effect-delete")
      .click(this._listenDeleteChaosEffect.bind(this));
    html.find("#chaos-effect-add").click(this._listenAddChaosEffect.bind(this));
  }

  async _listenPinToGM(event) {
    event.preventDefault();
    const data = game.ta.helpers.taHelper.getGMScreenData();
    data.antagonists[this.actor.id] = {
      name: this.actor.name,
      type: this.actor.system.type,
    };
    game.ta.helpers.taHelper.setGMScreenData(data);
  }

  async _listenAddChaosEffect(event) {
    event.preventDefault();
    if (this.actor.system.lock) {
      return;
    }

    const update = {};
    const id = foundry.utils.randomID();
    update["system.chaosEffects." + id] = {
      name: "New Chaos Effect",
      cost: 1,
      description: "Description goes here",
    };
    this.actor.update(update);
  }

  async _listenActivateChaosEffect(event) {
    event.preventDefault();
    if (!this.actor.system.lock) {
      return;
    }

    const target = event.currentTarget;
    const cost = Number(target.dataset.cost);
    let currentChaos = Number(
      game.settings.get("triangleagency", "chaos") || 0,
    );
    if (cost > currentChaos) {
      return;
    }

    const effect =
      this.actor.system.chaosEffects[event.currentTarget.dataset.id];

    const speaker = this.actor.system.hideName
      ? ChatMessage.getSpeaker({
          alias: game.i18n.localize("TYPES.Actor.Anomaly"),
        })
      : ChatMessage.getSpeaker({ actor: this.actor });

    let msg =
      speaker.alias + " " + game.i18n.localize("TA.Anomaly.PerformChaosEffect");
    msg = msg.replace("[effect]", effect.name);
    msg = "<span>" + msg + "</span>";

    game.ta.entities.taChatMessage.create({
      user: game.user.id,
      sound: CONFIG.sounds.notify,
      speaker: speaker,
      flags: {
        ta: {
          message: msg,
        },
      },
    });

    currentChaos -= cost;
    game.ta.applications.agencyOs.setChaos(currentChaos);
  }

  async _listenDeleteChaosEffect(event) {
    event.preventDefault();

    const target = event.target;

    const proceed = await foundry.applications.api.DialogV2.confirm({
      window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
      content: game.i18n.localize("TA.Dialog.DeleteConfirm"),
      rejectClose: false,
      modal: true,
    });

    if (proceed) {
      const updates = {};
      updates["system.chaosEffects.-=" + target.dataset.id] = null;
      this.actor.update(updates);
    }
  }

  async _listenSetInDomain(event) {
    event.preventDefault();
    event.stopPropagation();
    this.actor.update({ "system.indomain": event.target.checked });
  }

  async _listenSheetEditToggle(event) {
    document.activeElement.blur();
    event.preventDefault();
    event.stopPropagation();

    this.element
      .find("#toggle-edit-status")
      .removeClass(this.actor.system.lock ? "fa-lock" : "fa-lock-open")
      .addClass(this.actor.system.lock ? "fa-lock-open" : "fa-lock");
    this.actor.update({ "system.lock": !this.actor.system.lock });
  }

  async _listenSetAnomalyType(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const data = this.actor.system;
    const targetType = target.dataset.type;

    if (targetType != data.type) {
      this.actor.update({ "system.type": targetType });
    }
  }

  async _listenSetCurrentStability(event) {
    event.preventDefault();
    const target = event.target;
    const data = this.actor.system;

    switch (target.dataset.type) {
      case "set": {
        let value = Number(target.dataset.id) + 1;
        if (value == data.currentStability) {
          value -= 1;
        }
        this.actor.update({ "system.currentStability": value });
        break;
      }
      case "max":
        if (data.currentStability != 0) {
          this.actor.update({ "system.currentStability": 0 });
        }
        break;
    }
  }

  async _onDropItem(event, data) {
    if (this.actor.system.lock) {
      return;
    }

    const item = await fromUuid(data.uuid);
    const effects = this.actor.system.chaosEffects;

    switch (item.type) {
      case "ChaosEffect":
        // only one of each effect
        if (!(item.id in effects)) {
          effects[item.id] = {
            name: item.name,
            cost: Number(item.system.cost),
            description: item.system.description,
          };
          this.actor.update({ "system.chaosEffects": effects });
        }
        break;
    }
  }
}

class taActorBystanderSheet extends foundry.appv1.sheets.ActorSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "actor", "bystander"],
      width: 500,
      height: 500,
      resizable: true,
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/actor-bystander-sheet.hbs";
  }

  /** @override */
  async getData(options) {
    this.actor.system;

    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.actor.system,
      isGM: game.user.isGM,
      //config: CONFIG.TA,
      extra: this.actor.extra || {},
    });

    context.showAgency = game.user.isGM || this.actor.isOwner;

    //console.log(context);

    return context;
  }

  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    // add extra buttons
    const header = html[0].querySelector(".window-header");
    const parser = new DOMParser();

    let edit =
      '<a class="control show-players" data-tooltip="' +
      game.i18n.localize("TA.ShowPlayersImage") +
      '"><i class="fa-solid fa-eye"></i></a>';
    edit = parser.parseFromString(edit, "text/html").body.firstChild;
    edit.addEventListener("click", this._listenShowPlayers.bind(this));
    edit.addEventListener("dblclick", (event) => event.stopPropagation());
    let firstButton = header.querySelector(".header-button");
    firstButton?.insertAdjacentElement("beforebegin", edit);

    edit =
      '<a class="control pintogmscreen" data-tooltip="' +
      game.i18n.localize("TA.GM.PinToScreen") +
      '"><i class="fa-solid fa-thumbtack"></i></a>';
    edit = parser.parseFromString(edit, "text/html").body.firstChild;
    edit.addEventListener("click", this._listenPinToGM.bind(this));
    edit.addEventListener("dblclick", (event) => event.stopPropagation());
    firstButton = header.querySelector(".header-button");
    firstButton?.insertAdjacentElement("beforebegin", edit);

    return html;
  }

  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    const window = $(this.element);

    if (game.user.isGM || this.actor.isOwner) {
      sheetBody.css("height", bodyHeight);
    } else {
      window.css("height", "400px");
    }

    return position;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
  }

  async _listenPinToGM(event) {
    event.preventDefault();
    const data = game.ta.helpers.taHelper.getGMScreenData();
    data.others[this.actor.id] = this.actor.name;
    game.ta.helpers.taHelper.setGMScreenData(data);
  }

  async _listenShowPlayers(event) {
    event.preventDefault();
    const ip = new ImagePopout(this.actor.img).render(true);
    ip.shareImage();
  }
}

class taAnomalySheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 500,
      height: 600,
      resizable: true,
      tabs: [
        {
          navSelector: ".tabbed",
          contentSelector: ".tab-content",
          initial: "main",
        },
        {
          navSelector: ".abilities-nav",
          contentSelector: ".abilities-content",
          initial: "",
        },
      ],
      defaultImage: CONFIG.TA.assetPath + "/icons/anomaly-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-anomaly-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }

    context.extra.abilities = [];
    await game.items
      .filter(
        (item) =>
          item.type === "AnomalyAbility" && item.system.anomaly == this.item.id,
      )
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(async (item) => {
        const ability = {
          id: item.id,
          name: item.name,
          reference: item.system.reference,
          quality: game.i18n.localize("TA.Quality." + item.system.quality),
          description: item.system.description,
          rendered: "",
        };

        ability.rendered = await game.ta.helpers.taHelper.renderAnomalyAbility({
          ability: item,
          anomaly: this.item.name,
          actionable: false,
          showTitle: false,
        });

        context.extra.abilities.push(ability);
      });

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
  }
}

class taAnomalyAbilitySheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 500,
      height: 600,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/anomalyability-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-anomalyability-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      //config: CONFIG.TA,
      isGM: game.user.isGM,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }

    // prime the quality choices
    context.extra.qualities = {};
    CONFIG.TA.qualities.forEach(
      (quality) => (context.extra.qualities[quality] = "TA.Quality." + quality),
    );

    // prime the anomaly choices
    context.extra.anomalies = { "": "Unaffiliated" };
    game.items
      .filter((item) => item.type === "Anomaly")
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((item) => {
        context.extra.anomalies[item.id] = item.name;
      });

    // localize the outcome labels
    context.extra.outcomes = {};
    for (let [key] of Object.entries(this.item.system.outcomes)) {
      context.extra.outcomes[CONFIG.TA.outcomes[key].order] = {
        id: key,
        label: game.i18n.localize("TA.Outcome." + key + ".prefix"),
        description: context.system.outcomes[key],
      };
    }

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find(".editOutcome").click(this._listenEditOutcome.bind(this));
    html.find(".addAnswer").click(this._listenAddAnswer.bind(this));
  }

  async _listenAddAnswer(event) {
    event.preventDefault();
    const answers = this.item.system.improvement.answers;
    const update = {};
    for (let i = 1; i <= 4; i++) {
      if (answers["answer" + i]) {
        continue;
      }
      update["system.improvement.answers.answer" + i] = {
        text: "",
        track: {
          id: "",
          reference: "",
          name: "",
          description: "",
          size: 3,
          value: 0,
          strikes: 0,
          milestones: {},
        },
        nextStage: "",
      };
      this.item.update(update);
      break;
    }
  }

  async _listenEditOutcome(event) {
    event.preventDefault();
    const TEMPLATE =
      "systems/triangleagency/templates/item-anomalyability-outcome-sheet.hbs";
    const item = this.item;
    const data = {};

    const target = $(event.currentTarget);
    const action = target.data("action");

    switch (action) {
      case "edit":
      case "delete":
        data["triggerOn"] = target.parent().data("id");
        break;
    }

    if (action == "delete") {
      const proceed = await foundry.applications.api.DialogV2.confirm({
        window: { title: game.i18n.localize("TA.Dialog.Confirm.Header") },
        content: game.i18n.localize("TA.Dialog.DeleteConfirm"),
        rejectClose: false,
        modal: true,
      });

      if (proceed) {
        const updates = {};
        updates["system.outcomes.-=" + data["triggerOn"]] = null;
        item.update(updates);
      }
      return;
    }

    data.triggers = {};
    const currentTriggers = Object.keys(item.system.outcomes);
    for (const [key] of Object.entries(CONFIG.TA.outcomes)) {
      if (
        !currentTriggers.includes(key) ||
        (action == "edit" && key == data["triggerOn"])
      ) {
        data.triggers[key] = "TA.Outcome." + key + ".prefix";
      }
    }

    if (action == "edit") {
      data["outcomeDescription"] = item.system.outcomes[data["triggerOn"]];
    }

    const content = await foundry.applications.handlebars.renderTemplate(
      TEMPLATE,
      data,
    );

    new foundry.applications.api.DialogV2({
      window: { title: game.i18n.localize("TA.Anomaly.AbilityOutcome") },
      modal: true,
      content: content,
      buttons: [
        {
          action: "submit",
          label: game.i18n.localize("TA.Submit"),
          default: true,
          callback: (event, button) => {
            let trigger = button.form.elements.triggerOn.value;
            let outcomeDescription =
              button.form.elements.outcomeDescription.value.trim();

            if (outcomeDescription != "") {
              const updates = {};
              if (action == "edit" && trigger != data["triggerOn"]) {
                updates["system.outcomes.-=" + data["triggerOn"]] = null;
              }
              updates["system.outcomes." + trigger] = outcomeDescription;
              item.update(updates);
            }
          },
        },
        {
          action: "cancel",
          label: game.i18n.localize("TA.Cancel"),
        },
      ],
    }).render({ force: true });
  }
}

class taChaosEffectSheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 500,
      height: 600,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/chaos-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-chaoseffect-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      //config: CONFIG.TA,
      isGM: game.user.isGM,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    //if (!this.options.editable) return;
    //html.find('.editOutcome').click(this._listenEditOutcome.bind(this));
  }
}

class taCompetencySheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 500,
      height: 600,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/competency-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-competency-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }
    // prime the requisition choices
    context.extra.requisitions = {};
    game.items
      .filter((item) => item.type === "Requisition")
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((item) => {
        context.extra.requisitions[item.id] = item.name;
      });

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
  }
}

class taRealitySheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 500,
      height: 600,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/reality-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-reality-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      //config: CONFIG.TA,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }
    /*
    // FIX!! reality trigger track fix. Remove before rollout FIX!!
    //if (this.item.system.realityTrigger.track.size != 5) {
      update["system.realityTrigger.track.size"] = 5;
      update["system.realityTrigger.track.milestones"] = { "5": "<b>X</b>" };
    //}
    */

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    //html.find('.sanctionedBehavior').click(this._listenEditSanctionedBehavior.bind(this));
  }

  /*
  async _listenEditSanctionedBehavior(event) {
    event.preventDefault();
    const data = this.item.system;

    let flag = $(event.currentTarget)[0];
    update['system.flags.' + flag.id] = flag.checked;
    switch (flag.id) {
      case 'isNameKnown': {
        update['prototypeToken.displayName'] = flag.checked
          ? CONST.TOKEN_DISPLAY_MODES.ALWAYS
          : CONST.TOKEN_DISPLAY_MODES.OWNER;
      }
    }
    this.actor.update(update);
  }
  */
}

class taRequisitionSheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 500,
      height: 600,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/requisition-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-requisition-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);

    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    //html.find('.addChannel,.editChannel').click(this._listenUpsertChannel.bind(this));
    //html.find('.deleteChannel').click(this._listenDeleteChannel.bind(this));
  }
}

class taConnectionBenefitSheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 400,
      height: 400,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/connection-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-connectionbenefit-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);
    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    //html.find('.addChannel,.editChannel').click(this._listenUpsertChannel.bind(this));
    //html.find('.deleteChannel').click(this._listenDeleteChannel.bind(this));
  }
}

class taMissionReportSheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item", "missionreport"],
      width: 950,
      height: 780,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/missionreport-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-missionreport-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);
    return html;
  }

  /** @override */
  async getData(options) {
    const data = this.item.system;

    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: data,
      isGM: game.user.isGM,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }

    // format incident code
    const incidentCode = this.item.id.toUpperCase().match(/.{1,9}/g);
    context.incidentCode =
      incidentCode[0].match(/.{1,3}/g).join("-") + " / " + incidentCode[1];

    // team
    context.extra.team = [];
    context.extra.mvpName = "N/A";
    context.extra.probationName = "N/A";
    Object.keys(data.agents).forEach((id) => {
      if (id == data.mvp) {
        context.extra.mvpName = data.agents[id];
      }
      if (id == data.probation) {
        context.extra.probationName = data.agents[id];
      }
      context.extra.team.push({ id: id, name: data.agents[id] });
    });
    context.extra.team.sort((a, b) => a.name.localeCompare(b.name));
    context.extra.canimport =
      game.actors.filter(
        (actor) =>
          actor.type === "Agent" &&
          actor.hasPlayerOwner &&
          !Object.keys(data.agents).includes(actor.id),
      ).length > 0;

    context.extra.awardTeam = foundry.utils.deepClone(context.extra.team);
    context.extra.awardTeam.unshift({ id: "", name: "N/A" });

    context.extra.objectives = [];
    Object.keys(data.objectives).forEach((id) => {
      data.objectives[id].id = id;
      context.extra.objectives.push(data.objectives[id]);
    });

    context.extra.looseends = [];
    Object.keys(data.looseends).forEach((id) => {
      data.looseends[id].id = id;
      context.extra.looseends.push(data.looseends[id]);
    });

    context.extra.paperworkStatus = [
      { id: "exemplary", name: "TA.Paperwork.exemplary" },
      { id: "complete", name: "TA.Paperwork.complete" },
      { id: "incomplete", name: "TA.Paperwork.incomplete" },
      { id: "inaccurate", name: "TA.Paperwork.inaccurate" },
    ];
    context.extra.paperwork = game.i18n.localize(
      "TA.Paperwork." + data.paperwork,
    );

    //console.log(context);

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    html.find("#anomalyStatus").click(this._listenAnomalyStatus.bind(this));
    html.find("#addLooseEnd").click(this._listenAddLooseEnd.bind(this));
    html.find(".looseEndDesc").blur(this._listenLooseEndDesc.bind(this));

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find("#missionResolved").change(this._listenMissionStatus.bind(this));
    html.find("#importTeam").click(this._listenImportTeam.bind(this));
    html.find("#addObjective").click(this._listenAddObjective.bind(this));
    html
      .find(".objectiveType")
      .click(this._listenToggleObjectiveType.bind(this));
    html.find(".deleteObjective").click(this._listenDeleteObjective.bind(this));
    html.find(".objectiveDesc").blur(this._listenObjectiveDesc.bind(this));
    html.find(".deleteLooseEnd").click(this._listenDeleteLooseEnd.bind(this));
  }

  async _listenMissionStatus(event) {
    event.preventDefault();
    const data = this.item.system;
    const target = event.target;
    const state = target.checked;
    if (state == data.resolved) {
      return;
    }
    if (state == false && data.resolved) {
      // set all other active missions to resolved. only one active at a time
      const missions = game.items.filter(
        (item) =>
          item.type === "MissionReport" && item.system.resolved == false,
      );
      missions.forEach((mission) => {
        if (mission.id != this.item.id) {
          mission.update({ "system.resolved": true });
        }
      });
      this.item.update({ "system.resolved": false });
      return;
    }

    // validate and inform
    if (
      data.finalgrade == "" ||
      Object.keys(data.agents).length == 0 ||
      data.status == "" ||
      this.item.name.trim() == "" ||
      data.behavior.trim() == "" ||
      data.focus.trim() == "" ||
      data.domain.trim() == ""
    ) {
      //console.log(data);
      new foundry.applications.api.DialogV2({
        window: { title: game.i18n.localize("TA.Dialog.Notification") },
        modal: true,
        content: game.i18n.localize("TA.Mission.Incomplete"),
        buttons: [
          {
            action: "ok",
            label: game.i18n.localize("TA.Action.Okay"),
            default: true,
          },
        ],
        submit: () => {
          target.checked = false;
        },
      }).render({ force: true });
    } else {
      let msg =
        '<div class="displayarea" style="width: 700px; padding: 10px; color: black">' +
        "<div>" +
        game.i18n.localize("TA.Mission.AwardLeadIn") +
        "</div>" +
        "<ul>";
      let commendation = 3;
      switch (data.paperwork) {
        case "exemplary":
          commendation = 6;
          break;
        case "incomplete":
        case "inaccurate":
          commendation = 0;
          break;
      }
      if (commendation > 0) {
        msg +=
          "<li>" +
          game.i18n
            .localize("TA.Mission.CommendationAward")
            .replace("[commendation]", commendation) +
          "</li>";
      }
      if (data.mvp != "") {
        msg +=
          "<li>" +
          game.i18n
            .localize("TA.Mission.MVPAward")
            .replace("[agent]", data.agents[data.mvp]) +
          "</li>";
      }
      if (data.probation != "") {
        msg +=
          "<li>" +
          game.i18n
            .localize("TA.Mission.ProbationAward")
            .replace("[agent]", data.agents[data.probation]) +
          "</li>";
      }
      Object.keys(data.agents).forEach((id) => {
        if (id != data.mvp && id != data.probation) {
          msg +=
            "<li>" +
            game.i18n
              .localize("TA.Mission.ParticipationAward")
              .replace("[agent]", data.agents[id]) +
            "</li>";
        }
      });

      msg += "</ul></div>";

      new foundry.applications.api.DialogV2({
        window: {
          title: game.i18n.localize("TA.Dialog.Notification"),
        },
        modal: true,
        content: msg,
        buttons: [
          {
            action: "okay",
            label: game.i18n.localize("TA.Action.Okay"),
          },
          {
            action: "cancel",
            label: game.i18n.localize("TA.Action.Cancel"),
            default: true,
          },
        ],
        submit: (result) => {
          if (result == "okay") {
            this.item.update({ "system.resolved": true });
          } else {
            target.checked = false;
          }
        },
      }).render({ force: true });
    }
  }

  async _listenDeleteLooseEnd(event) {
    const target = event.target;
    const id = target.dataset.id;
    const update = {};
    update["system.looseends.-=" + id] = null;
    this.item.update(update);
  }

  async _listenLooseEndDesc(event) {
    const target = event.target;
    const id = target.dataset.id;
    const data = this.item.system.looseends[id];
    const content = target.innerHTML.trim();
    if (content != data.description) {
      const update = {};
      update["system.looseends." + id + ".description"] = content;
      this.item.update(update);
    }
  }

  async _listenAddLooseEnd(event) {
    event.preventDefault();

    const id = foundry.utils.randomID();
    const update = {};
    update["system.looseends." + id] = {
      name: "Loose End",
      value: 1,
      description: "",
    };
    this.item.update(update);
  }

  async _listenDeleteObjective(event) {
    const target = event.target;
    const id = target.dataset.id;
    const update = {};
    update["system.objectives.-=" + id] = null;
    this.item.update(update);
  }

  async _listenObjectiveDesc(event) {
    const target = event.target;
    const id = target.dataset.id;
    const data = this.item.system.objectives[id];
    const content = target.innerHTML.trim();
    if (content != data.description) {
      const update = {};
      update["system.objectives." + id + ".description"] = content;
      this.item.update(update);
    }
  }

  async _listenToggleObjectiveType(event) {
    event.preventDefault();

    const update = {};
    const id = event.currentTarget.dataset.id;
    let next = "commendation";
    switch (this.item.system.objectives[id].type) {
      case "commendation":
        next = "demerit";
        break;
      case "demerit":
        next = "custom";
        break;
    }
    update["system.objectives." + id + ".type"] = next;
    this.item.update(update);
  }

  async _listenAddObjective(event) {
    event.preventDefault();

    const id = foundry.utils.randomID();
    const update = {};
    update["system.objectives." + id] = {
      type: "commendation",
      value: 1,
      description: "",
    };
    this.item.update(update);
  }

  async _listenAnomalyStatus(event) {
    event.preventDefault();
    let status = event.target.dataset.status;
    if (status) {
      if (status == this.item.system.status) {
        status = "";
      } // clear the selection if re-clicked
      this.item.update({ "system.status": status });
    }
  }

  async _listenImportTeam(event) {
    event.preventDefault();

    // add available PCs
    const agents = game.actors
      .filter(
        (actor) =>
          actor.type === "Agent" &&
          actor.hasPlayerOwner &&
          !Object.keys(this.item.system.agents).includes(actor.id),
      )
      .map((actor) => {
        return { id: actor.id, name: actor.name };
      });
    if (agents.length == 0) {
      return;
    }

    //console.log(agents)
    const update = {};
    agents.forEach((agent) => {
      update["system.agents." + agent.id] = agent.name;
    });
    this.item.update(update);
  }
}

class taSponsorshipSheet extends foundry.appv1.sheets.ItemSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "item"],
      width: 600,
      //height: 600,
      resizable: true,
      defaultImage: CONFIG.TA.assetPath + "/icons/sponsorship-icon.png",
    });
  }

  /** @override */
  get template() {
    return "systems/triangleagency/templates/item-sponsorship-sheet.hbs";
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);
    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      //config: CONFIG.TA,
      isGM: game.user.isGM,
      extra: this.item.extra || {},
    });

    // housekeeping
    const update = {};
    if (this.item.img != this.options.defaultImage) {
      update["img"] = this.options.defaultImage;
      this.item.update(update);
    }
    //console.log(context);

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height + 100;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    //if (!this.options.editable) return;
    //html.find('.editOutcome').click(this._listenEditOutcome.bind(this));
  }
}

class JournalEntryPlaywallSheet extends foundry.appv1.sheets.JournalSheet {
  static _warnedAppV1 = true;

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/triangleagency/templates/journal-sheet.hbs",
      width: 1000,
      height: 800,
      resizable: true,
    });
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);
    return html;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    this.data;

    foundry.utils.mergeObject(context, {
      isGM: game.user.isGM,
    });

    // is this the playwall journal?
    const playwall = game.settings.get("triangleagency", "playwall");
    context.showPlaywallButton = playwall == null || this.object.id == playwall;

    //console.log(context)

    return context;
  }

  /**
   * Prepare pages for display.
   * @returns {JournalEntryPage[]}  The sorted list of pages.
   * @protected
   * @override
   */
  _getPageData() {
    const _pageData = super._getPageData();
    let filtered = [];
    if (this.document.id == game.settings.get("triangleagency", "playwall")) {
      if (game.user.isGM) {
        filtered = _pageData;
      } else if (game.user.character && game.user.character.type == "Agent") {
        const active = game.user.character.system.allPlaywall || [];
        for (const page of _pageData) {
          if (active.includes(page.system.code)) {
            filtered.push(page);
          }
        }
      }

      filtered.sort((a, b) =>
        (a.system.code || "").localeCompare(b.system.code || ""),
      );
    } else {
      filtered = _pageData;
    }

    return filtered;
  }

  _getEntryContextOptions() {
    let menu = super._getEntryContextOptions();
    /*
    const anachronometerId = game.settings.get('tnt', 'anachronometer');
    if (this.object._id == anachronometerId) {
      menu = menu.filter((option) => option.name != 'SIDEBAR.Edit');
    }
    */
    return menu;
  }

  /**
   * Update child views inside the main sheet.
   * @returns {Promise<void>}
   * @protected
   */
  async _renderPageViews() {
    return super._renderPageViews();
  }

  /*  Event Handlers                              */

  /** @inheritdoc */
  activateListeners(html) {
    super.activateListeners(html);
    html
      .find('.create[data-action="createPlaywall"]')
      .click(this._listenAddPlaywall.bind(this));
  }

  async _listenAddPlaywall(event) {
    event.preventDefault();
    $(event.target);
    const page = (await this.document.addPlaywall("333", "Playwall"))[0];
    page.sheet.render(true, { editable: true });
  }
}

class PlaywallSheet extends foundry.appv1.sheets.JournalTextPageSheet {
  static _warnedAppV1 = true;

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["triangleagency", "sheet", "playwall"],
      width: 1000,
      height: 800,
      resizable: true,
    });
  }

  get template() {
    return `systems/triangleagency/templates/journal-playwall-sheet-${this.isEditable ? "edit" : "view"}.hbs`;
  }

  /** @inheritDoc */
  async _renderOuter() {
    const html = await super._renderOuter();
    game.ta.helpers.taHelper.adjustHeaderButtons(html, false);
    return html;
  }

  async getData(options = {}) {
    const context = await super.getData(options);
    foundry.utils.mergeObject(context, {
      isGM: game.user.isGM,
    });

    const data = this.document.system;
    const flags = this.document.flags.ta || {};
    const config = game.ta.config;

    context.code = data.code;
    context.aspect = data.aspect || "undefined";
    context.content =
      await foundry.applications.ux.TextEditor.implementation.enrichHTML(
        data.content,
        {
          async: true,
          secrets: this.object.isOwner,
          relativeTo: this.object,
        },
      );
    context.data = flags;

    if (context.isGM && this.isEditable) {
      context.lists = {};
      context.lists.aspects = config.playwallLists.aspects;

      // find out who can access this
      const players = game.users.players.map((player) => player.id);
      const access = Object.keys(this.object.ownership)
        .filter((id) => this.object.ownership[id] > 0)
        .filter((x) => players.includes(x));

      context.viewers = [
        ...new Set(
          game.actors
            .filter((actor) => actor.type === "Agent" && actor.hasPlayerOwner)
            .map((agent) => {
              return {
                name: agent.name,
                owners: Object.keys(agent.ownership)
                  .filter((id) => agent.ownership[id] > 0)
                  .filter((x) => access.includes(x)),
              };
            })
            .filter((actor) => actor.owners.length > 0)
            .map((actor) => actor.name),
        ),
      ].sort();

      // get the refrences
      if (data.code) {
        // is not null, undefined, blank
        let references = flags.abilities;

        let update = {};
        const abilities = game.items.filter(
          (item) =>
            item.type == "AnomalyAbility" && item.system.reference == data.code,
        );
        abilities.forEach((ability) => {
          if (references[ability._id] == null) {
            update["flags.ta.abilities." + ability._id] = {
              mergeAction: "add",
              targetAnomalyId: ability.system.anomaly,
              targetAbilityId: "",
            };
          }
        });
        if (Object.keys(update).length > 0) {
          this.object.update(update);
        }
        // requisitions
        references = flags.requisitions;
        update = {};
        const requisitions = game.items.filter(
          (item) =>
            item.type == "Requisition" && item.system.reference == data.code,
        );
        requisitions.forEach((requisition) => {
          if (references[requisition._id] == null) {
            update["flags.ta.requisitions." + requisition._id] =
              requisition.name;
          }
        });
        if (Object.keys(update).length > 0) {
          this.object.update(update);
        }
      }
    }

    // get ability details
    context.abilities = {};
    if (Object.keys(flags.abilities).length > 0) {
      // get anomaly and abilty lists
      context.anomalies = game.items
        .filter((item) => item.type == "Anomaly")
        .map((anomaly) => {
          return { id: anomaly.id, name: anomaly.name };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      /*
      context.anomalies.list = Object.assign(
        {},
        ...(game.items.filter(item => item.type == "Anomaly")).map(({id, name}) => ({ [id]: { "name": name } }))
      );
      */

      const abilities = game.items.filter(
        (item) =>
          item.type == "AnomalyAbility" &&
          Object.keys(flags.abilities).includes(item.id),
      );
      abilities.forEach(async (ability) => {
        const data = flags.abilities[ability.id];
        context.hasAbilities = true;

        context.abilities[ability.id] = {
          name: ability.name,
        };

        if (context.isGM && this.isEditable) {
          foundry.utils.mergeObject(context.abilities[ability.id], data);
          context.abilities[ability.id].showTargets = data.mergeAction != "add";

          if (data.mergeAction != "add") {
            // get the valid targets
            const exclusions = Object.keys(flags.abilities).concat(
              Object.keys(flags.abilities)
                .filter(
                  (tgt) =>
                    tgt != ability.id &&
                    flags.abilities[tgt].targetAbilityId != "",
                )
                .map((tgt) => flags.abilities[tgt].targetAbilityId),
            );
            context.abilities[ability.id].targetList = game.items
              .filter(
                (item) =>
                  item.type == "AnomalyAbility" &&
                  item.system.anomaly == data.targetAnomalyId &&
                  !exclusions.includes(item.id),
              )
              .map((target) => {
                return {
                  id: target.id,
                  name:
                    target.name +
                    (target.system.reference
                      ? " (" + target.system.reference + ")"
                      : ""),
                };
              })
              .sort((a, b) => a.name.localeCompare(b.name));
            context.abilities[ability.id].targetList.unshift({
              id: "",
              name: "",
            });
          }
        } else {
          context.abilities[ability.id].render =
            await game.ta.helpers.taHelper.renderAnomalyAbility({
              ability,
              qas: null,
              anomaly: null,
              actionable: false,
              showTitle: true,
            });
        }
      });
    }

    // get requisition details
    context.requisitions = [];
    if (Object.keys(flags.requisitions).length > 0) {
      context.requisitions = game.items
        .filter(
          (item) =>
            item.type == "Requisition" &&
            Object.keys(flags.requisitions).includes(item.id),
        )
        .map((requisition) => {
          return {
            id: requisition.id,
            name: requisition.name,
            description: requisition.system.description,
            cost: requisition.system.cost,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    }

    // get track details
    context.hasTrack = Object.keys(flags.tracks).length > 0;
    if (context.hasTrack && !context.editable) {
      const track = flags.tracks;
      track.id = data.code;
      track.name = data.code;

      let value = 0;
      if (track.shared) {
        value = track.value || 0;
      } else {
        const actor = game.users.current.character;
        if (actor && actor.system.allPlaywall.includes(data.code)) {
          const trackRef = actor.getPlaywall(data.code);
          if (trackRef) {
            value = trackRef.extra.value || 0;
          }
        }
      }
      track.value = value;

      context.track = await game.ta.helpers.taHelper.renderTrack({
        track,
        columns: track.wrap,
        canstrike: false,
        connectors: true,
        startIcon: "&#9654;",
        showMilestoneContent: false,
        render: true,
        canaction: true,
        renderOptions: {
          trackClass: game.ta.config.aspects.anomaly.colorClass,
          trackType: "anomaly",
          boxClass: "playwall",
        },
      });
    }

    //console.log(context);

    return context;
  }

  /** @inheritdoc */
  activateListeners(html) {
    const flags = this.document.flags.ta || {};

    super.activateListeners(html);
    if (Object.keys(flags.tracks).length > 0) {
      html
        .find(".track-box.track-action")
        .click(this._listenClickTrack.bind(this));
    }

    if (game.user.isGM) {
      html
        .find(".playwallContext")
        .change(this._listenPlaywallContextt.bind(this));
      html.find("#playwallName").change(this._listenPlaywallName.bind(this));
      html
        .find("#playwallReference")
        .change(this._listenPlaywallReference.bind(this));
      html.find("#gmnotes").change(this._listenChangeNotes.bind(this));
      html
        .find(".abilityAction")
        .change(this._listenChangeAbilityAction.bind(this));
      html
        .find(".abilityTarget")
        .change(this._listenChangeAbilityTarget.bind(this));
      html.find(".trackData").change(this._listenChangeTrack.bind(this));
      if (Object.keys(flags.tracks).length == 0) {
        html.find(".addTrack").click(this._listenAddTrack.bind(this));
      }
    }
  }

  async _listenAddTrack(event) {
    event.preventDefault();
    const target = event.target;
    target.dataset.id;
    const update = {};
    update["flags.ta.tracks.size"] = 10;
    update["flags.ta.tracks.wrap"] = 10;
    update["flags.ta.tracks.value"] = 0;
    this.object.update(update);
  }

  async _listenClickTrack(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.dataset.id;
    let value = Number(target.dataset.value);
    if (target.classList.contains("track-checked")) {
      value -= 1;
    }
    const flags = this.document.flags.ta || {};
    const update = {};

    if (flags.tracks.shared) {
      if (game.user == game.users.activeGM) {
        update["flags.ta.tracks.value"] = value;
        this.object.update(update);
      } else {
        game.system.socketHandler.emit("setJournalTrack", {
          journalId: this.object.parent.id,
          pageId: this.object.id,
          value: value,
        });
      }
    } else {
      const actor = game.users.current.character;
      if (actor && actor.system.allPlaywall.includes(id)) {
        const trackRef = actor.getPlaywall(id);
        update[
          "system.achievements." + trackRef.context + "." + id + ".value"
        ] = value;
        actor.update(update);
      }
    }
  }

  async _listenChangeTrack(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.dataset.id;
    let value = target.value;
    const tracks = this.document.flags.ta.tracks || {};

    const update = {};
    if (id == "shared") {
      value = target.checked;
    }
    if (id == "size" && value == 0) {
      Object.keys(tracks).forEach((key) => {
        update["flags.ta.tracks.-=" + key] = null;
      });
    } else {
      update["flags.ta.tracks." + id] = Number(value);
    }
    //console.log(update)
    this.object.update(update);
  }

  async _listenChangeAbilityTarget(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const target = event.target.value;
    if (target == "") {
      return;
    }
    const update = {};
    update["flags.ta.abilities." + id + ".targetAbilityId"] = target;
    this.object.update(update);
  }

  async _listenPlaywallName(event) {
    event.preventDefault();
    this.document.update({ name: event.target.value });
  }

  async _listenPlaywallReference(event) {
    event.preventDefault();
    const update = {};
    const flags = this.document.flags.ta || {};
    update["system.code"] = event.target.value;
    Object.keys(flags.abilities).forEach((id) => {
      update["flags.ta.abilities.-=" + id] = null;
    });
    this.document.update(update);
  }

  async _listenChangeAbilityAction(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const action = event.target.value;
    const update = {};
    update["flags.ta.abilities." + id + ".mergeAction"] = action;
    if (action == "add") {
      update["flags.ta.abilities." + id + ".targetAbilityId"] = "";
    }
    this.object.update(update);
  }

  async _listenChangeNotes(event) {
    event.preventDefault();
    const note = event.target.value;
    this.object.update({ "flags.ta.gmnotes": note });
  }

  async _listenPlaywallContextt(event) {
    event.preventDefault();
    const context = event.target.value;

    $("#playwallReference")
      .parent()
      .removeClass()
      .addClass("color-background-" + context);
  }

  async _onDropItem(event, data) {
    await fromUuid(data.uuid);
    //console.log("DROPPPPP")
  }
}

function registerHelpers() {
  Handlebars.registerHelper("ifequal", function (a, b, options) {
    if (a == b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper("ifnotequal", function (a, b, options) {
    if (a != b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper("gt", function (a, b) {
    return a > b;
  });

  Handlebars.registerHelper("gte", function (a, b) {
    return a >= b;
  });

  Handlebars.registerHelper("breaklines", function (text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(
      /(\r\n|\n|\r)/gm,
      '<span style="line-height: 0.5em"><br/></span>',
    );
    return new Handlebars.SafeString(text);
  });
}

// Import general

// Initialize system
Hooks.once("init", async () => {
  // Create a namespace within the game global
  game.ta = {
    applications: {
      taAgentSheet,
      taActorAnomalySheet,
      taActorBystanderSheet,
      taJournalEntry,

      taAnomalySheet,
      taAnomalyAbilitySheet,
      taChaosEffectSheet,
      taCompetencySheet,
      taRealitySheet,
      taRequisitionSheet,
      taConnectionBenefitSheet,
      taMissionReportSheet,
      taSponsorshipSheet,

      taChatMessage,

      agencyOs: void 0,
      GMScreen: void 0,
      PlayerScreen: PlayerScreen,
    },
    canvas: {
      //AbilityTemplate
    },
    config: TA,
    entities: {
      taActor,
      taItem,
      taJournalEntry,
      taChatMessage,
    },

    helpers: {
      taHelper,
      taDice,
    },

    settings: {},
    //macros: macros,
    //migrations: migrations,
  };

  // Register custom system settings
  registerSettings();

  // Handlebars
  registerHelpers();
  await preloadTemplates();

  // Initilize the sockets
  game.system.socketHandler = new taSocketHandler();

  // Assign custom classes and constants here
  CONFIG.TA = TA;
  CONFIG.Actor.documentClass = taActor;
  CONFIG.Item.documentClass = taItem;
  CONFIG.JournalEntry.documentClass = taJournalEntry;
  CONFIG.ChatMessage.documentClass = taChatMessage;

  Object.assign(CONFIG.JournalEntryPage.dataModels, {
    "triangleagency.Playwall": Playwall,
  });

  // Register custom sheets
  foundry.documents.collections.Actors.unregisterSheet(
    "core",
    foundry.appv1.sheets.ActorSheet,
  );
  foundry.documents.collections.Actors.registerSheet(
    "triangleagency",
    taAgentSheet,
    { types: ["Agent"], makeDefault: true },
  );
  foundry.documents.collections.Actors.registerSheet(
    "triangleagency",
    taActorAnomalySheet,
    { types: ["Anomaly"], makeDefault: true },
  );
  foundry.documents.collections.Actors.registerSheet(
    "triangleagency",
    taActorBystanderSheet,
    { types: ["Bystander"], makeDefault: true },
  );

  foundry.documents.collections.Items.unregisterSheet(
    "core",
    foundry.appv1.sheets.ItemSheet,
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taAnomalySheet,
    { types: ["Anomaly"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taAnomalyAbilitySheet,
    { types: ["AnomalyAbility"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taChaosEffectSheet,
    { types: ["ChaosEffect"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taCompetencySheet,
    { types: ["Competency"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taRealitySheet,
    { types: ["Reality"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taRequisitionSheet,
    { types: ["Requisition"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taConnectionBenefitSheet,
    { types: ["ConnectionBenefit"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taMissionReportSheet,
    { types: ["MissionReport"], makeDefault: true },
  );
  foundry.documents.collections.Items.registerSheet(
    "triangleagency",
    taSponsorshipSheet,
    { types: ["Sponsorship"], makeDefault: true },
  );

  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    JournalEntry,
    "triangleagency",
    JournalEntryPlaywallSheet,
    {
      makeDefault: true,
      label: "Playwall",
    },
  );

  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    JournalEntryPage,
    "triangleagency",
    PlaywallSheet,
    {
      types: ["Playwall"],
      makeDefault: true,
    },
  );
});

const showChat = (message, data, options, userId) => {
  setTimeout(() => {
    if (!ui.sidebar.expanded || !document.hasFocus()) {
      ui.sidebar.changeTab("chat", "primary");
      ui.sidebar.expand();
    }
  });
  return 99;
};

// Setup system
Hooks.once("setup", async () => {
  // set up the AgencyOS app
  const agency = new agencyOs();
  game.ta.applications.agencyOs = agency;
});

// When ready
Hooks.once("ready", async () => {
  // set path helpers
  TA.assetPath = "systems/" + game.system.id + "/assets";

  // replace the default logo
  const logo = $("#logo");
  logo.attr("src", TA.assetPath + "/icons/ta-logo.png");
  logo.removeAttr("height");
  logo.css("object-fit", "cover");

  game.ta.helpers.taHelper.syncAssets();

  if (game.user.isGM) {
    const currentVersion = game.settings.get(
      "triangleagency",
      "systemMigrationVersion",
    );
    const NEEDS_MIGRATION_VERSION = "1.1.00";
    const needsMigration =
      !currentVersion ||
      foundry.utils.isNewerVersion(NEEDS_MIGRATION_VERSION, currentVersion);
    if (needsMigration) {
      console.log("Migrating " + currentVersion + " to Current Version");
      await migrate();
    }
  }

  // Macros
  setupMacros();

  game.ta.applications.agencyOs.render({
    force: true,
    position: agencyOs.calcPosition(),
  });

  // cache the settings
  game.ta.settings.manualStanding = game.settings.get(
    "triangleagency",
    "manualStanding",
  );
  game.ta.settings.weather = game.settings.get("triangleagency", "weather");
  game.ta.settings.playerExtra = game.settings.get(
    "triangleagency",
    "playerExtra",
  );
  game.ta.settings.playerPlaywallTracks = game.settings.get(
    "triangleagency",
    "playerExtraPlaywall",
  );
  game.ta.settings.sceneBurnout = game.settings.get(
    "triangleagency",
    "sceneBurnout",
  );
  game.ta.settings.autoATABurnout = game.settings.get(
    "triangleagency",
    "autoATABurnout",
  );

  // set up the GM Screen
  if (game.user.isGM) {
    const gmScreen = new GMScreen();
    gmScreen.options.window.title = game.i18n.localize("TA.GeneralManager");
    game.ta.applications.GMScreen = gmScreen;
  }

  showChat();
});

//Set Chat to show up on message
Hooks.on("createChatMessage", showChat);

Hooks.on("renderItemDirectory", (app, html) => {
  const items = app.collection
    .filter(
      (item) =>
        ["AnomalyAbility", "Requisition"].includes(item.type) &&
        item.system.reference != "",
    )
    .map((entry) => {
      return {
        id: entry.id,
        name: entry.name,
        context: entry.type == "AnomalyAbility" ? "anomaly" : "requisition",
        reference: entry.system.reference,
      };
    });

  items.forEach((item) => {
    const tag =
      '<span class="color-background-' +
      item.context +
      ' playwallTag">' +
      item.reference +
      "</span>" +
      item.name;
    html.querySelector(
      "li.directory-item.entry.document.item[data-entry-id='" +
        item.id +
        "'] a.entry-name",
    ).innerHTML = tag;
  });
});

Hooks.on("renderGamePause", function () {
  $("#pause.paused img").attr(
    "src",
    "systems/" + game.system.id + "/assets/ui/pause.png",
  );
});

Hooks.on("updateScene", function (scene, data) {
  if (game.user.isGM && data.active && game.ta.settings.sceneBurnout) {
    const value = scene.flags.ta ? Number(scene.flags.ta.burnout ?? 0) : 0;
    game.ta.applications.agencyOs.setBurnout(value);
  }
});

Hooks.once("diceSoNiceReady", (dice3d) => {
  dice3d.addSystem(
    {
      id: "triangleagency",
      name: "Triangle Agency",
    },
    true,
  ); // true = system will use this as the default d4 without user needing to activate it, false make it a selectable dice-so-nice system but not activate it by default.

  dice3d.addDicePreset({
    type: "d4",
    modelFile: "systems/triangleagency/assets/dice/d4-no-numbers.glb",
    system: "triangleagency",
  });
  dice3d.addDicePreset({
    type: "d6",
    modelFile: "systems/triangleagency/assets/dice/d6-ta.glb",
    system: "triangleagency",
  });
  dice3d.addDicePreset({
    type: "d8",
    modelFile: "systems/triangleagency/assets/dice/d8-ta.glb",
    system: "triangleagency",
  });
  dice3d.addDicePreset({
    type: "d10",
    modelFile: "systems/triangleagency/assets/dice/d10-ta.glb",
    system: "triangleagency",
  });
  dice3d.addDicePreset({
    type: "d20",
    modelFile: "systems/triangleagency/assets/dice/d20-ta.glb",
    system: "triangleagency",
  });
});

Hooks.on("preCreateActor", (actor, data, options, userId) => {
  if (data.type !== "Agent") return;
  data.prototypeToken.actorLink = true;
});

Hooks.on("preUpdateActor", (actor, changes) => {
  if (actor.type !== "Agent") return;
  changes.prototypeToken.actorLink = true;
});

Hooks.once("ready", async () => {
  const updates = game.actors
    .filter((a) => a.type === "Agent" && !a.prototypeToken.actorLink)
    .map((a) => ({
      _id: a.id,
      "prototypeToken.actorLink": true,
    }));

  if (updates.length) {
    await Actor.updateDocuments(updates);
  }
});

// Handle browser resizes
window.addEventListener("resize", s_WINDOW_RESIZE);
function s_WINDOW_RESIZE() {
  agencyOs.setPosition();
}
