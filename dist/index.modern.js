import React__default, { useState, createElement } from 'react';

var styles = {"container":"_styles-module__container__1Lxpd","leftColumn":"_styles-module__leftColumn__2gaAC","leftColumnGap":"_styles-module__leftColumnGap__ijnjF","rightColumn":"_styles-module__rightColumn__3NenG","subColumn":"_styles-module__subColumn__39ZZ8","subColumnActive":"_styles-module__subColumnActive__2CF2J","titlePart":"_styles-module__titlePart__3BaYH","descriptionPart":"_styles-module__descriptionPart__3ubcI","timeProgress":"_styles-module__timeProgress__2-wbY","timeRemainning":"_styles-module__timeRemainning__3Tma6","percentProgress":"_styles-module__percentProgress__25lI6","titleChapter":"_styles-module__titleChapter__zqKUL","titleChapterActive":"_styles-module__titleChapterActive__1RYoN","timeProgressSecondary":"_styles-module__timeProgressSecondary__1AjD2","timeRemainningSecondary":"_styles-module__timeRemainningSecondary__3LgLF","percentProgressSecondary":"_styles-module__percentProgressSecondary__lpLCV","progressContainer":"_styles-module__progressContainer__1vzPx","btnPrimary":"_styles-module__btnPrimary__3LN22","btnSecondary":"_styles-module__btnSecondary__1aql5","infoChapterRight":"_styles-module__infoChapterRight__2cr3p","titleChapterRight":"_styles-module__titleChapterRight__102GJ","infoUnit":"_styles-module__infoUnit__34j0Z","titleLearning":"_styles-module__titleLearning__kLKwI","timeUnit":"_styles-module__timeUnit__37abq"};

const Progress = ({
  classNameBtn,
  classNameTitle,
  classNameRemainning,
  classPercent
}) => {
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

const Chapter = ({
  handleClickActive,
  item,
  activeItem
}) => {
  return React__default.createElement("div", {
    className: item === activeItem ? styles.subColumnActive : styles.subColumn
  }, React__default.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => handleClickActive(item)
  }, React__default.createElement("div", {
    className: activeItem === item ? styles.titleChapterActive : styles.titleChapter
  }, "Chapter 1: Audit and other assurance engagement"), React__default.createElement(Progress, {
    classNameBtn: activeItem === item ? styles.btnPrimary : styles.btnSecondary,
    classNameTitle: activeItem === item ? styles.timeProgress : styles.timeProgressSecondary,
    classNameRemainning: styles.timeRemainningSecondary,
    classPercent: activeItem === item ? styles.percentProgress : styles.percentProgressSecondary
  })));
};

const items = ['Items1', 'Item 2', 'Items3', 'item4', 'aa'];
const ChapterLeft = ({
  handleClickActive,
  activeItem
}) => {
  return React__default.createElement("div", {
    className: styles.leftColumn
  }, React__default.createElement("div", {
    className: styles.subColumn
  }, React__default.createElement("div", null, React__default.createElement("div", {
    className: styles.titlePart
  }, "Part A: Audit framework and regulation"), React__default.createElement("div", {
    className: styles.descriptionPart
  }, "An introduction to supply-and-demand and of analysis for customers and firms and pro max."), React__default.createElement(Progress, {
    classNameBtn: styles.btnPrimary,
    classNameTitle: styles.timeProgress,
    classNameRemainning: styles.timeRemainning,
    classPercent: styles.percentProgress
  }))), items.map(item => React__default.createElement(Chapter, {
    key: item,
    handleClickActive: handleClickActive,
    item: item,
    activeItem: activeItem
  })));
};

var progress = "progress~lAMTqpqB.svg";

const PartUnit = () => {
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

const ExampleComponent = () => {
  const [activeItem, setActiveItem] = useState(null);
  console.log(activeItem);
  const handleClickActive = item => {
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
