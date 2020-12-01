import BaseP from './diary.page';
import BasePage from './Base.page';
import DiaryPage from './diary.page';
import { randomDataCreateDailyReport } from '../../data/randomData';

class CreateDayReportPage extends BasePage {
  get subPageCreateDayReport() {
    return $('.ant-drawer-body');
  }

  get marksCheckbox() {
    return $$('.ant-checkbox-input');
  }

  get moralField() {
    return $('#morale');
  }
  get indexLevelMoral() {
    return $$('.ant-select-item-option-content');
  }

  get moral() {
    return $$('.ant-select-selector');
  }
  // $$("#morale_list_6") // есть такие ID, но не придумала как их использовать

  get hoursField() {
    return $('#hours');
  }
  get hoursList() {
    return $$('.ant-select-item-option-content');
    //return $("#hours_list"); // есть такие ID, но не придумала как их использовать
  }

  get descriptionDayField() {
    return $('#description');
  }

  get submitReportBtn() {
    return $$('.ant-btn-primary')[1];
  }
  createDailyReport() {
    DiaryPage.createReportBtn.click();

    // Marks to your daily report
    let r;
    for (let i = 0; i < 12; i++){
       r = Math.round(Math.random());
       if (r) { this.marksCheckbox[i].click();}
    }

    // What is your moral? level is from 10 to 3
    this.moralField.click();
    r =  Math.ceil(Math.random() * 10);
    for (let i = 0; i <= r; i++) {
      browser.keys('\uE013');
    }
    browser.keys("Enter");

    // How many hours did you study?
    this.hoursField.click();
    r =  Math.ceil(Math.random() * 10);
    for (let i = 0; i <= r; i++) {
      browser.keys('\uE013');
    }
    browser.keys("Enter");

    // How was your day?
    let descriptionDay = randomDataCreateDailyReport.text;
    this.descriptionDayField.click();
    this.descriptionDayField.setValue(descriptionDay);

    this.submitReportBtn.click();

    return 'Fine'; // вывожу для проверки работы функции,
                  //  НАДО БЫ вернуть все зачения вводимых и выбранных данных для дальнейшей их обработки
  }

  // createDailyReport() {
  //   DiaryPage.createReportBtn.click();
  //
  //   // Marks to your daily report
  //   let numberMarks = randomDataCreateDailyReport.checkbox;
  //   for (let i = 0; i <= numberMarks; i++) {
  //     this.marksCheckbox[i].click();
  //   }
  //   // What is your moral? level is from 10 to 3
  //   this.moralField.click();
  //   let index = randomDataCreateDailyReport.moralSelectorIndexTop;
  //
  //   //if (index <= 7) {
  //   this.indexLevelMoral[index].click(); //}
  //   // else {
  //   //  CreateDayReport.indexLevelMoral[7].click();
  //   //  CreateDayReport.indexLevelMoral[7].click();
  //   //  browser.keys('\uE013');
  //   // CreateDayReport.indexLevelMoral[index].waitForDisplayed();
  //   // $("#morale_list_1").waitForDisplayed();
  //   // CreateDayReport.indexLevelMoral[9].click();
  //
  //   // How many hours did you study?
  //   this.hoursField.click();
  //   let numberHours = randomDataCreateDailyReport.hoursSelectorIndex;
  //   this.hoursList[numberHours].click();
  //
  //   // How was your day?
  //   let descriptionDay = randomDataCreateDailyReport.text;
  //   this.descriptionDayField.click();
  //   this.descriptionDayField.setValue(descriptionDay);
  //
  //   this.submitReportBtn.click();
  //
  //   return 'Fine'; // вывожу для проверки работы функции,
  //                 //  НАДО БЫ вернуть все зачения вводимых и выбранных данных для дальнейшей их обработки
  // }
}
export default new CreateDayReportPage();
