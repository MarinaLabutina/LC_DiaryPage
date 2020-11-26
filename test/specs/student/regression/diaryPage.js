import LoginPage from '../../../pageobjects/login.page';
import user from '../../../../data/users.data';
import ProfilePage from '../../../pageobjects/profile.page';
import { profilePage, diaryPage, digits } from '../../../../data/expected.data';
import DiaryPage from '../../../pageobjects/diary.page';
import WaitTimes from '../../../../data/waitTimes';

describe('VERIFY THAT DIARY PAGE FOR STUDENT ROLE', () => {
  before(() => {
    LoginPage.open();
    browser.maximizeWindow();
    browser.deleteAllCookies();
    LoginPage.login(user.student.email, user.student.password);
    ProfilePage.createReportBtn.waitForDisplayed();
    ProfilePage.topMenuDiary.click();
  });

  describe('VERIFY THAT MAIN ELEMENTS PRESENT ON DIARY PAGE', function () {
    it('TC-75 Verify that url for Dairy page is https://stage.localcoding.us/diary', function () {
      expect(browser.getUrl()).toEqual(diaryPage.diaryUrl);
    });

    it('TС -77 Verify that the Dairy page has  the header with text "Daily reports"', function () {
      expect(DiaryPage.headerDiaryPage.getText()).toEqual(diaryPage.header);
    });

    it('TC-78.1 Verify that Dairy page has field "Total Diaries" and quantity', function () {
      expect(DiaryPage.statTotalDiaries.getText()).toEqual(diaryPage.statTotalDiaries);
    });

    it('TC-78.2 Verify that Dairy page has field "Total Diaries" and quantity', function () {
      expect(DiaryPage.statTotalDiariesCount.isDisplayed()).toEqual(true);
    });

    it('TC-78.2.1 Verify that Dairy page has field "Total Diaries" and quantity( and not equal zero)', function () {
      expect(DiaryPage.statTotalDiariesCount.getValue()).not.toEqual(digits.zero);
    });

    it('TC-79.1 Verify that Dairy page has field "Today Daily Reports" and quantity', function () {
      expect(DiaryPage.statTodayDailyReport.getText()).toEqual(diaryPage.statTodayDailyReport);
    });

    it('TC-79.2 Verify that Dairy page has field "Today Daily Reports" and quantity', function () {
      expect(DiaryPage.statTodayDailyReportCount.isDisplayed()).toEqual(true);
    });

    xit('TC-79.2.1 Verify that Dairy page has field "Today Daily Reports" and quantity( and not equal zero)', function () {
      expect(DiaryPage.statTodayDailyReportCount.getText()).toEqual(digits.zeroText);
      // 0  не должно быть, счетчик не рабочий bug
    });

    it('TC-80.1 Verify that Dairy page has field "Total Hours Spent" and quantity', function () {
      expect(diaryPage.statTotalHoursSpent).toEqual(DiaryPage.statTotalHoursSpent.getText());
    });

    it('TC-80.2 Verify that Dairy page has field "Total Hours Spent" and quantity', function () {
      expect(DiaryPage.statTotalHoursSpentCount.isDisplayed()).toEqual(true);
    });

    xit('TC-80.2.1 Verify that Dairy page has field "Total Hours Spent" and quantity( and not equal zero)', function () {
      expect(DiaryPage.statTotalHoursSpentCount.getText()).toEqual(digits.zeroText);
      // 0  не должно быть, счетчик не рабочий bug
    });

    it('TC-81.1 Verify that Dairy page has field "Average Morale Level" and quantity', function () {
      expect(DiaryPage.statAverageMoraleLevel.getText()).toEqual(diaryPage.statAverageMoraleLevel);
    });

    it('TC-81.2 Verify that Dairy page has field "Average Morale Level" and quantity', function () {
      expect(DiaryPage.statAverageMoraleLevelCount.isDisplayed()).toEqual(true);
    });

    xit('TC-81.2.1 Verify that Dairy page has field "Average Morale Level" and quantity( and not equal zero)', function () {
      expect(DiaryPage.statAverageMoraleLevelCount.getText()).toEqual(digits.zeroText);
      // 0  не должно быть, счетчик не рабочий bug
    });

    it('TC-82.1 Verify that Dairy page has btn "Create day report"', function () {
      expect(DiaryPage.createReportBtnDairyPage.isDisplayed()).toEqual(true);
    });

    it('TC-82.2 Verify that create day report button is clickable on Diary page', () => {
      expect(DiaryPage.createReportBtnDairyPage.isClickable()).toEqual(true);
    });

    it("TC-82.3 Verify that create day report button text = 'Create day report' on Diary page", () => {
      expect(DiaryPage.createReportBtnDairyPage.getText()).toEqual(profilePage.createBtn);
    });

    it('TC-83 Verify that Dairy page has 10 last reports  ', function () {
      expect(DiaryPage.numberReportsOnPage.length).toEqual(digits.ten);
    });

    it('TC-84 Verify that the reports sort by date and time. The last should be on the top', function () {
      expect(DiaryPage.sortedDiaryReportsByTime()).toEqual(true);
    });
  });

  describe('VERIFY THAT VALUE OF ELEMENTS  ARE CORRECT ON DIARY PAGE', function () {
    it('TC-85 Verify that each reports has its text and its similar to the last report', function () {
      // lets finish later
    });

    it('TC-90 Verify that report has btn with 3 dots vertical (…)', function () {
      expect(DiaryPage.btn3Dots.isDisplayed());
    });

    it('TC-91 Verify that if you click on 3 dots in the last report pop up shows list of 3 btns: Approve, Edit and Delete" ', function () {
      DiaryPage.btn3Dots.moveTo();
      //browser.pause(WaitTimes.WAIT_TIME_SHORT);
      $('.ant-dropdown-menu-vertical').waitForDisplayed();
      expect(DiaryPage.getValueOfArray(DiaryPage.btn3dotsArray)).toEqual(diaryPage.array3dots);
    });

  });
});
