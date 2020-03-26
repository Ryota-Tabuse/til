/**
 * Create an Apex class that uses Batch Apex to update Lead records.
 */
global with sharing class LeadProcessor implements Database.Batchable<SObject>{

    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator(
            'SELECT Id FROM Lead'
        );
    }

    global void execute(Database.BatchableContext bc, List<Lead> scope) {
        for(Lead ld : scope){
            ld.LeadSource = 'Dreamforce';
        }
        update scope;
    }

    global void finish(Database.BatchableContext bc) {}

}
