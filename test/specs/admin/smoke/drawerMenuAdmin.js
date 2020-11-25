import LoginPage from '../../../pageobjects/login.page';
import ProfilePage from '../../../pageobjects/profile.page';
import user from '../../../../data/users.data';
import { topMenu, profilePage, diaryPage, drawerMenu } from '../../../../data/expected.data';
import ReportDrawerMenu from '../../../pageobjects/reportDrawer.menu';

describe('REPORT DRAWER MENU', () => {
  before(() => {
    LoginPage.open();
    browser.maximizeWindow();
    LoginPage.login(user.admin.email, user.admin.password);
    ProfilePage.createReportBtn.click();
  });

  describe('VERIFY THAT ALL REPORT DRAWER MENU ELEMENTS ARE PRESENT & CORRECT', () => {
    it("Verify that Report Drawer menu title is present & = 'Create day report'", () => {
      expect(ReportDrawerMenu.RDTitle.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDTitle.getText()).toEqual(drawerMenu.title);
    });

    it("Verify that Report Drawer menu sub title is present & = 'Marks to your daily report'", () => {
      expect(ReportDrawerMenu.RDSubTitle.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDSubTitle.getText()).toEqual(drawerMenu.subTitle);
    });

    it("Verify that Report Drawer menu label 'I need help' title is present & correct", () => {
      expect(ReportDrawerMenu.RDLINeedHelp.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLINeedHelp.getText().includes(drawerMenu.iNeedHelp)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'I need help' sub text is present &  correct", () => {
      expect(ReportDrawerMenu.RDLINeedHelpSubTXT.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLINeedHelpSubTXT.getText().includes(drawerMenu.iNeedHelpSubTXT)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'I understood everything' title is present & correct", () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverything.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLIUnderstoodEverything.getText().includes(drawerMenu.understood)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'I understood everything' sub text is present &  correct", () => {
      expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLIUnderstoodEverythingSubTXT.getText().includes(drawerMenu.understoodSubTXT)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Helped classmates' title is present & correct", () => {
      expect(ReportDrawerMenu.RDLHelpedClassmates.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLHelpedClassmates.getText().includes(drawerMenu.helped)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Helped classmates' sub text is present &  correct", () => {
      expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLHelpedClassmatesSubTXT.getText().includes(drawerMenu.helpedSubTXT)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Watched lectures' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLWatchedLectures.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLWatchedLectures.getText().includes(drawerMenu.watched)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Read documentation' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLRead.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLRead.getText().includes(drawerMenu.read)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Code practice' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLCode.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLCode.getText().includes(drawerMenu.code)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Quiz practice' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLQuiz.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLQuiz.getText().includes(drawerMenu.quiz)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Interview preparation' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLInterviewPrep.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLInterviewPrep.getText().includes(drawerMenu.interviewPrep)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Recruiter phone call' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLRecruiter.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLRecruiter.getText().includes(drawerMenu.recruiter)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Interview technical screen' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLInterviewTech.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLInterviewTech.getText().includes(drawerMenu.interviewTech)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Interview onsite' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLInterviewOnsite.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLInterviewOnsite.getText().includes(drawerMenu.interviewOnsite)).toEqual(true);
    });

    it("Verify that Report Drawer menu label 'Got a job offer' title is present &  correct", () => {
      expect(ReportDrawerMenu.RDLJobOffer.isDisplayed()).toEqual(true);
      expect(ReportDrawerMenu.RDLJobOffer.getText().includes(drawerMenu.jobOffer)).toEqual(true);
    });
  });
});
