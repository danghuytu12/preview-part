import React__default, { useState, createElement } from 'react';

var styles = {"container":"_1Lxpd","leftColumn":"_2gaAC","leftColumnGap":"_ijnjF","rightColumn":"_3NenG","subColumn":"_39ZZ8","subColumnPart":"_3a68D","subColumnActive":"_2CF2J","titlePart":"_3BaYH","descriptionPart":"_3ubcI","timeProgress":"_2-wbY","timeRemainning":"_3Tma6","percentProgress":"_25lI6","titleChapter":"_zqKUL","titleChapterActive":"_1RYoN","timeProgressSecondary":"_1AjD2","timeRemainningSecondary":"_3LgLF","percentProgressSecondary":"_lpLCV","progressContainer":"_1vzPx","btnPrimary":"_3LN22","btnSecondary":"_1aql5","infoChapterRight":"_2cr3p","titleChapterRight":"_102GJ","infoUnit":"_34j0Z","titleLearning":"_kLKwI","timeUnit":"_37abq"};

var Progress = function Progress(_ref) {
  var classNameBtn = _ref.classNameBtn,
    classNameTitle = _ref.classNameTitle,
    classNameRemainning = _ref.classNameRemainning,
    classPercent = _ref.classPercent;
  return React__default.createElement("div", {
    className: styles.progressContainer
  }, React__default.createElement("div", {
    style: {
      height: 6,
      margin: '3px 0px',
      background: '#f1f1f1'
    }
  }, React__default.createElement("div", {
    style: {
      width: '88%',
      height: 6
    },
    className: classNameBtn
  })), React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 5
    }
  }, React__default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, React__default.createElement("div", {
    className: classNameTitle
  }, "time"), React__default.createElement("span", {
    className: classNameRemainning
  }, "remainning")), React__default.createElement("div", {
    className: classPercent
  }, "30%")));
};

var Chapter = function Chapter(_ref) {
  var handleClickActive = _ref.handleClickActive,
    item = _ref.item,
    activeItem = _ref.activeItem;
  return React__default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, item === activeItem ? React__default.createElement("div", {
    style: {
      background: '#ffd700',
      width: 6,
      margin: '15px 0px'
    }
  }) : null, React__default.createElement("div", {
    className: item === activeItem ? styles.subColumnActive : styles.subColumn
  }, React__default.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return handleClickActive(item);
    }
  }, React__default.createElement("div", {
    className: activeItem === item ? styles.titleChapterActive : styles.titleChapter
  }, "Chapter 1: Audit and other assurance engagement"), React__default.createElement(Progress, {
    classNameBtn: activeItem === item ? styles.btnPrimary : styles.btnSecondary,
    classNameTitle: activeItem === item ? styles.timeProgress : styles.timeProgressSecondary,
    classNameRemainning: styles.timeRemainningSecondary,
    classPercent: activeItem === item ? styles.percentProgress : styles.percentProgressSecondary
  }))));
};

var items = ['Items1', 'Item 2', 'Items3', 'item4', 'aa'];
var ChapterLeft = function ChapterLeft(_ref) {
  var handleClickActive = _ref.handleClickActive,
    activeItem = _ref.activeItem;
  return React__default.createElement("div", {
    className: styles.leftColumn
  }, React__default.createElement("div", {
    className: styles.subColumnPart
  }, React__default.createElement("div", null, React__default.createElement("div", {
    className: styles.titlePart
  }, "Part A: Audit framework and regulation"), React__default.createElement("div", {
    className: styles.descriptionPart
  }, "An introduction to supply-and-demand and of analysis for customers and firms and pro max."), React__default.createElement(Progress, {
    classNameBtn: styles.btnPrimary,
    classNameTitle: styles.timeProgress,
    classNameRemainning: styles.timeRemainning,
    classPercent: styles.percentProgress
  }))), items.map(function (item) {
    return React__default.createElement(Chapter, {
      key: item,
      handleClickActive: handleClickActive,
      item: item,
      activeItem: activeItem
    });
  }));
};

var progress = "progress~lAMTqpqB.svg";

var PartUnit = function PartUnit() {
  return React__default.createElement("div", null, React__default.createElement("div", {
    className: styles.titleChapterRight,
    style: {
      marginTop: 25
    }
  }, "Learning Outcome"), React__default.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, "editor"), React__default.createElement("div", {
    className: styles.infoUnit,
    style: {
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", null, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    },
    className: styles.titleLearning
  }, "Name")), React__default.createElement("div", {
    className: styles.timeUnit
  }, "21m")), React__default.createElement("div", {
    className: styles.infoUnit,
    style: {
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", null, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    },
    className: styles.titleLearning
  }, "Name")), React__default.createElement("div", {
    className: styles.timeUnit
  }, "21m")), React__default.createElement("div", {
    className: styles.infoUnit,
    style: {
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", null, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    },
    className: styles.titleLearning
  }, "Name")), React__default.createElement("div", {
    className: styles.timeUnit
  }, "21m")));
};

function ChapterRight() {
  return React__default.createElement("div", {
    className: styles.columnRight
  }, React__default.createElement("div", {
    className: styles.infoChapterRight
  }, "editor"), React__default.createElement("div", {
    className: styles.titleChapterRight
  }, "Learning Outcome"), React__default.createElement("div", {
    className: styles.infoUnit
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", null, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    },
    className: styles.titleLearning
  }, "Learning Outcome")), React__default.createElement("div", {
    className: styles.timeUnit
  }, "21m")), React__default.createElement(PartUnit, null), React__default.createElement(PartUnit, null), React__default.createElement(PartUnit, null), React__default.createElement("div", {
    className: styles.titleChapterRight,
    style: {
      marginTop: 25
    }
  }, "Learning Outcome"), React__default.createElement("div", {
    className: styles.infoUnit,
    style: {
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React__default.createElement("div", null, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React__default.createElement("img", {
    src: progress
  })), React__default.createElement("div", {
    style: {
      marginLeft: 10
    },
    className: styles.titleLearning
  }, "Learning Outcome")), React__default.createElement("div", {
    className: styles.timeUnit
  }, "21m")));
}

var ExampleComponent = function ExampleComponent() {
  var _React$useState = useState(null),
    activeItem = _React$useState[0],
    setActiveItem = _React$useState[1];
  var handleClickActive = function handleClickActive(item) {
    setActiveItem(item);
  };
  return createElement("div", {
    className: styles.container
  }, createElement(ChapterLeft, {
    handleClickActive: handleClickActive,
    activeItem: activeItem
  }), createElement(ChapterRight, null));
};

export default ExampleComponent;
//# sourceMappingURL=index.modern.js.map
