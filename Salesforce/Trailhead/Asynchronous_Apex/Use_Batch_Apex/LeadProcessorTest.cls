@isTest
private class LeadProcessorTest {
    @TestSetup
    static void makeData(){
        List<Lead> lds = new List<Lead>();
        for(Integer i = 0; i < 200; i++) {
            Lead ld = new Lead(
                LastName = 'Test',
                Company = 'TestCompany'
            );
            lds.add(ld);
        }
        insert lds;
    }

    @isTest
    static void leadProcessorTest() {

        Test.startTest();
        LeadProcessor lp = new LeadProcessor();
        Id batchId = Database.executeBatch(lp);
        Test.stopTest();

        System.assertEquals(200, [SELECT count() FROM Lead WHERE LeadSource = 'Dreamforce']);
    }
}
