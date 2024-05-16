package com.koureer.backend.exeptions;

import org.springframework.context.i18n.LocaleContextHolder;

public class BadCredentialsException extends RuntimeException {
        public BadCredentialsException() {
        super(com.koureer.backend.shared.Messages.getMessageForLocale("Bad credentials.", LocaleContextHolder.getLocale()));
    }
}
