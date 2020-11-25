import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import DiaryPage from '../../../pageobjects/diary.page';

import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage } from '../../../../data/expected.data';

describe('VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS', () => {
  describe('VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS IN TOP MENU FOR LEARNER', () => {
    before(() => {
      LoginPage.open();
      browser.maximizeWindow();
      browser.deleteAllCookies();
      LoginPage.login(user.learner.email, user.learner.password);
      ProfilePage.createReportBtn.waitForDisplayed();
    });

    it('###Verify that diary tab exist in the top menu', () => {
      expect(ProfilePage.topMenuDiaryLearner.isDisplayed()).toEqual(true);
    });

    it('Verify that diary tab is clickable in the top menu', () => {
      expect(ProfilePage.topMenuDiaryLearner.isClickable()).toEqual(true);
    });

    it("Verify that diary tab text = 'Diary' in the top menu", () => {
      expect(ProfilePage.topMenuDiaryLearner.getText()).toEqual(topMenu.Diary);
    });

    it('Verify that diary tab in the top menu redirect to diary page', () => {
      ProfilePage.topMenuDiaryLearner.click();
      expect(browser.getUrl()).toEqual(diaryPage.diaryUrl);
    });
  });

  describe('VERIFY THAT PROFILE PAGE HAS DIARY ELEMENTS IN DOM FOR LEARNER', () => {
    before(() => {
      LoginPage.open();
      browser.maximizeWindow();
      browser.deleteAllCookies();
      LoginPage.login(user.learner.email, user.learner.password);
      ProfilePage.createReportBtn.waitForDisplayed();
    });

    it('Verify that create day report button exist on profile page', () => {
      expect(ProfilePage.createReportBtn.isDisplayed()).toEqual(true);
    });

    it('Verify that create day report button is clickable on profile page', () => {
      expect(ProfilePage.createReportBtn.isClickable()).toEqual(true);
    });

    it("Verify that create day report button text = 'Create day report' on profile page", () => {
      expect(ProfilePage.createReportBtn.getText()).toEqual(profilePage.createBtn);
    });

    it('Verify that label Daily reports  exist on profile page ', () => {
      expect(ProfilePage.dailyReportsLabel.isDisplayed()).toEqual(true);
    });

    it("Verify that label Daily reports text =  'Daily reports' on profile page ", () => {
      expect(ProfilePage.dailyReportsLabel.getText().includes(profilePage.dailyReportsLabelText)).toEqual(true);
    });

    it('Verify that label Daily reports counter exists on profile page ', () => {
      expect(ProfilePage.dailyReportsCounter.isDisplayed()).toEqual(true);
    });

    it('Verify that the chart field is present on the page', () => {
      expect(ProfilePage.chartField.isDisplayed()).toEqual(true);
    });

    it('Verify that the chart field name is present on the page', () => {
      expect(ProfilePage.chartFieldName.isDisplayed()).toEqual(true);
    });

    it('Verify that the chart field name text = "Daily progress"', () => {
      expect(ProfilePage.chartFieldName.getText().includes(profilePage.chartFieldNameText)).toEqual(true);
    });

  });
});

