import BasePage from './Base.page';

class DiaryPage extends BasePage {
  get createReportBtn() {
    return $('.ant-btn-primary');
  }

  get headerDiaryPage() {
    return $('h1');
  }

  get statTotalDiaries() {
    return $('.ant-statistic-title');
  }

  get statTotalDiariesCount() {
    return $$('.ant-statistic-content-value-int')[0];
  }

  get statTodayDailyReport() {
    return $$('.ant-statistic-title')[1];
  }

  get statTodayDailyReportCount() {
    return $$('.ant-statistic-content-value-int')[1];
  }

  get statTotalHoursSpent() {
    return $$('.ant-statistic-title')[2];
  }

  get statTotalHoursSpentCount() {
    return $$('.ant-statistic-content-value-int')[2];
  }

  get statAverageMoraleLevel() {
    return $$('.ant-statistic-title')[3];
  }

  get statAverageMoraleLevelCount() {
    return $$('.ant-statistic-content-value-int')[3];
  }

  get createReportBtnDairyPage() {
    return $('.ant-btn.ant-btn-primary');
  }
  get numberReportsOnPage() {
    return $$('.col-md-8');
  }

  get listOfDates() {
    return $$('.mr-2.small');
  }

  get btn3Dots() {
    return $$('.ant-dropdown-trigger')[1];
  }

  get btn3dotsArray() {
    return $$("li[role='menuitem']");
  }

  get approveBtn3Dots() {
    return $$("li[role='menuitem']")[0];
  }

  open() {
    super.open('/diary');
  }

  sortedDiaryReportsByTime() {
    const check = this.listOfDates;
    let arr = [];
    let x;
    for (let i = 0; i < check.length; i++) {
      x = check[i].getText();
      arr.push(x);
    }
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      let y = new Date(arr[i]);
      newArr.push(y.getTime());
    }

    let sortedArr = newArr.slice();

    sortedArr = sortedArr.sort((a, b) => b - a);
    return newArr.join('') === sortedArr.join('');
  }

  getValueOfArray(array){
    let arr = [];
    let x;
    for (let i = 0; i < array.length; i++) {
      x = array[i].getText();
      arr.push(x);
    }
    return arr.join(', ')
  }
}

export default new DiaryPage();
