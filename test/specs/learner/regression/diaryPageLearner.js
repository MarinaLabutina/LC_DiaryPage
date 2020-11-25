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

        it('Verify that Diary page has "Total Diaries" field', () => {
           expect(DiaryPage.statTotalDiaries.getText()).toEqual(diaryPage.statTotalDiaries);
        });

        it('Verify that Diary page "Total Diaries" field has quantity', () => {
           expect(DiaryPage.statTotalDiariesCount.isDisplayed()).toEqual(true);
        });

        it('Verify that Diary page "Total Diaries" field quantity != 0', () => {
           expect(DiaryPage.statTotalDiariesCount.getValue()).not.toEqual(digits.zero);
        });

        xit('##### Verify that Diary page "Total Diaries" field quantity != 0', () => {
            expect(DiaryPage.statTodayDailyReportCount.getValue()).toEqual(digits.digit);
        });

    });
});
