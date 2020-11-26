import BasePage from './Base.page';

class ProfilePage extends BasePage {
  get topMenuDiary() {
    return $$('.item')[2];
  }

  get topMenuDiaryLearner() {
    return $$('.item')[1];
  }

  get chartField() {
    return $('.ant-col-offset-4');
  }

  get chartFieldName() {
    return $$('h5')[1];
  }

  get btnSkip() {
    return $('.text-right');
  }

  get createReportBtn() {
    return $('[data-qa=dailyReportsBtn]');
  }

  get dailyReportsLabel() {
    return $('[data-qa="dailyReports"]');
  }

  get dailyReportsCounter() {
    return $('.ml-2');
  }

}
export default new ProfilePage();
