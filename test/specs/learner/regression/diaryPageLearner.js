import  LoginPage from '../../../pageobjects/login.page';
import  ProfilePage from '../../../pageobjects/profile.page';
import  DiaryPage from '../../../pageobjects/diary.page';

import user from  '../../../../data/users.data';
import { topMenu, profilePage, diaryPage, digits, drawerMenu } from '../../../../data/expected.data';

describe('VERIFY THAT DIARY PAGE FOR LEARNER', () => {
    before(() => {
        LoginPage.open();
        browser.maximizeWindow();
        browser.deleteCookies();
        LoginPage.login(user.learner.email, user.learner.password);
        ProfilePage.createReportBtn.waitForDisplayed();
        ProfilePage.topMenuDiaryLearner.click();
    });

    describe('VERIFY THAT THE MAIN ELEMENTS PRESENT ON THE PAGE FOR LEARNER', () => {
        it('Verify that url for Dairy page is https://stage.localcoding.us/diary', () => {
            expect(browser.getUrl()).toEqual(diaryPage.diaryUrl);
        });

        it('Verify that header is present & text = "Daily reports"', () => {
            expect(DiaryPage.headerDiaryPage.getText()).toEqual(diaryPage.header);
        });



        it('Verify that Diary page has field with text "Total Diaries"', () => {
           expect(DiaryPage.statTotalDiaries.getText()).toEqual(diaryPage.statTotalDiaries);
        });

        it('Verify that Diary page "Total Diaries" field is present', () => {
            expect(DiaryPage.statTotalDiaries.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Total Diaries" field has quantity', () => {
           expect(DiaryPage.statTotalDiariesCount.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Total Diaries" field quantity != 0', () => {
           expect(DiaryPage.statTotalDiariesCount.getValue()).not.toEqual(digits.zero);
        });



        it('Verify that Diary page has field with text "Today Daily Reports"', () => {
            expect(DiaryPage.statTodayDailyReport.getText()).toEqual(diaryPage.statTodayDailyReport);
        });

        it('Verify that Diary page "Today Daily Reports" field is present', () => {
            expect(DiaryPage.statTodayDailyReport.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Today Daily Reports" field has quantity', () => {
            expect(DiaryPage.statTodayDailyReportCount.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Today Daily Reports" field quantity != 0', () => {
            expect(DiaryPage.statTodayDailyReportCount.getValue()).not.toEqual(digits.zero);
        });



        it('Verify that Diary page has field with text "Total Hours Spent"', () => {
            expect(DiaryPage.statTotalHoursSpent.getText()).toEqual(diaryPage.statTotalHoursSpent);
        });

        it('Verify that Diary page "Total Hours Spent" field is present', () => {
            expect(DiaryPage.statTotalHoursSpent.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Total Hours Spent" field has quantity', () => {
            expect(DiaryPage.statTotalHoursSpentCount.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Total Hours Spent" field quantity != 0', () => {
            expect(DiaryPage.statTotalHoursSpentCount.getValue()).not.toEqual(digits.zero);
        });



        it('Verify that Diary page has field with text "Average Morale Level"', () => {
            expect(DiaryPage.statAverageMoraleLevel.getText()).toEqual(diaryPage.statAverageMoraleLevel);
        });

        it('Verify that Diary page "Average Morale Level" field is present', () => {
            expect(DiaryPage.statAverageMoraleLevel.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Average Morale Level" field has quantity', () => {
            expect(DiaryPage.statAverageMoraleLevelCount.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Average Morale Level" field quantity != 0', () => {
            expect(DiaryPage.statAverageMoraleLevelCount.getValue()).not.toEqual(digits.zero);
        });



        it('Verify that Create button is present on Diary page', () => {
           expect(DiaryPage.createReportBtnDairyPage.isDisplayed()).toEqual(true);
        });

        it('Verify that Create button = "Create day report" on Diary page', () => {
            expect(DiaryPage.createReportBtnDairyPage.getText()).toEqual(diaryPage.createBtn);
        });

        it('Verify that Create button is clickable on Diary page', () => {
            expect(DiaryPage.createReportBtnDairyPage.isClickable()).toEqual(true);
        });
    });
});
