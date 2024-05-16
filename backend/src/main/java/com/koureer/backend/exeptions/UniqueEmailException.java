package com.koureer.backend.exeptions;

import org.springframework.context.i18n.LocaleContextHolder;

public class UniqueEmailException extends RuntimeException {
    public UniqueEmailException() {
        super(com.koureer.backend.shared.Messages.getMessageForLocale("Email in use", LocaleContextHolder.getLocale()));
    }
}
